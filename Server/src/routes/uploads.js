const express = require('express')
const router = express.Router()
const multer = require('multer')
const cloudinary = require('cloudinary').v2

const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files are allowed'), false)
    }
    cb(null, true)
  }
})

// cloudinary.URL can be provided via CLOUDINARY_URL env var in the format
// cloudinary://API_KEY:API_SECRET@CLOUD_NAME
if (process.env.CLOUDINARY_URL) {
  cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL })
} else {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })
}

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' })
    const buffer = req.file.buffer

    const uploadStream = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({ 
          resource_type: 'image',
          folder: 'rocketflow',
          transformation: [
            { width: 1200, crop: 'limit' },
            { quality: 'auto:good' }
          ]
        }, (error, result) => {
          if (error) return reject(error)
          resolve(result)
        })
        stream.end(buffer)
      })
    }

    const result = await uploadStream()
    res.json({ url: result.secure_url })
  } catch (err) {
    console.error('Upload error:', err)
    if (err.message === 'Only image files are allowed') {
      return res.status(400).json({ error: err.message })
    }
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'File size exceeds 5MB limit' })
    }
    res.status(500).json({ error: 'Upload failed. Please try again.' })
  }
})

module.exports = router
