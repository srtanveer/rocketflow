"use client"

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { useRef, useState, useEffect } from 'react'
import { FaBold, FaItalic, FaHeading, FaListUl, FaListOl, FaImage, FaTrash } from 'react-icons/fa'

export default function BlogEditor({ value, onChange, onImageUpload }) {
  const fileInputRef = useRef()
  const [uploading, setUploading] = useState(false)
  const [notice, setNotice] = useState('')
  const [mounted, setMounted] = useState(false)

  // Wait for component to mount before initializing editor
  useEffect(() => {
    setMounted(true)
  }, [])

  // This component is a client component ("use client") so it's safe to initialize TipTap here.
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: value,
    onUpdate: ({ editor }) => {
      onChange && onChange(editor.getHTML())
    },
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'prose max-w-full min-h-[200px] focus:outline-none',
      },
    },
  }, [mounted])

  // Keep editor content in sync when parent value changes
  useEffect(() => {
    if (!editor) return
    const current = editor.getHTML()
    if (value !== current) {
      // ensure images in content have classes for good preview/shape
      const processed = addImageClasses(value || '<p></p>')
      editor.commands.setContent(processed)
    }
  }, [value, editor])

  async function handleImageUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    try {
      // Call parent handler to upload to Cloudinary
      const url = await onImageUpload(file)
      if (editor) {
        // insert image with helpful attributes, classes and inline style to enforce sizing
        editor.chain().focus().setImage({
          src: url,
          alt: file.name,
          title: file.name,
          loading: 'lazy',
          // cap size immediately: use max-width and auto height to preserve aspect ratio
          class: 'rounded-xl max-w-full',
          style: 'max-width:100%; max-height:16rem; width:auto; height:auto; object-fit:cover;'
        }).run()
      }
    } finally {
      setUploading(false)
    }
  }


  // ensure <img> tags have classes for consistent sizing/styling in editor and preview
function addImageClasses(html = '') {
  if (!html) return html
    try {
      return html.replace(/<img\b([^>]*)>/gi, (match, attrs) => {
        // if there's a style attribute, don't duplicate but ensure max-height/object-fit present
        if (/\bstyle=/.test(attrs)) {
          // append our sizing if not present
          let updated = attrs.replace(/style=(['"])(.*?)\1/, (m, q, s) => {
            let st = s
            if (!/max-height/.test(st)) st += ';max-height:16rem'
            if (!/max-width/.test(st)) st += ';max-width:100%'
            if (!/object-fit/.test(st)) st += ';object-fit:cover'
            if (!/height/.test(st)) st += ';height:auto'
            return `style=${q}${st}${q}`
          })
          // ensure class exists
          if (/\bclass=/.test(updated)) {
            updated = updated.replace(/class=(['"])(.*?)\1/, (m, q, cls) => {
              const add = ' rounded-xl'
              if (cls.includes('rounded-xl')) return `class=${q}${cls}${q}`
              return `class=${q}${cls}${add}${q}`
            })
          } else {
            updated = ` class="rounded-xl" ${updated}`
          }
          return `<img${updated}>`
        }

        if (/\bclass=/.test(attrs)) {
          return '<img' + attrs.replace(/class=(['"])(.*?)\1/, (m, q, cls) => {
            const add = ' rounded-xl max-w-full'
            if (cls.includes('rounded-xl') || cls.includes('max-w-full')) return `class=${q}${cls}${q}`
            return `class=${q}${cls}${add}${q}`
          }) + ' style="max-width:100%; max-height:16rem; width:auto; height:auto; object-fit:cover"'
        }
  return `<img class="rounded-xl max-w-full" style="max-width:100%; max-height:16rem; width:auto; height:auto; object-fit:cover" ${attrs}>`
      })
    } catch (e) {
      return html
    }
}

  function insertImageFile() {
    // open hidden file input
    fileInputRef.current.click()
  }

  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <ToolbarButton onClick={() => editor?.chain().focus().toggleBold().run()} active={editor?.isActive('bold')}> <FaBold /> </ToolbarButton>
          <ToolbarButton onClick={() => editor?.chain().focus().toggleItalic().run()} active={editor?.isActive('italic')}> <FaItalic /> </ToolbarButton>
          <ToolbarButton onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()} active={editor?.isActive('heading', { level: 2 })}> <FaHeading /> </ToolbarButton>
          <ToolbarButton onClick={() => editor?.chain().focus().toggleBulletList().run()} active={editor?.isActive('bulletList')}> <FaListUl /> </ToolbarButton>
          <ToolbarButton onClick={() => editor?.chain().focus().toggleOrderedList().run()} active={editor?.isActive('orderedList')}> <FaListOl /> </ToolbarButton>
          <ToolbarButton onClick={insertImageFile}> <FaImage /> </ToolbarButton>
          <ToolbarButton onClick={() => {
            // remove selected image node if image is active
            if (!editor) return
            if (editor.isActive('image')) {
              editor.chain().focus().deleteSelection().run()
              setNotice('Image removed')
              setTimeout(() => setNotice(''), 2000)
            } else {
              setNotice('Select an image to remove')
              setTimeout(() => setNotice(''), 2000)
            }
          }}>
            <FaTrash />
          </ToolbarButton>
        </div>
        <div>
          <button type="button" className="bg-coral-500 text-white px-3 py-1 rounded text-sm" onClick={insertImageFile}>{uploading ? 'Uploading...' : 'Insert image'}</button>
        </div>
      </div>

  <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageUpload} />

      {!mounted ? (
        <div className="min-h-[200px] flex items-center justify-center text-gray-400">Loading editor...</div>
      ) : editor ? (
        <EditorContent editor={editor} />
      ) : (
        <div className="min-h-[200px] flex items-center justify-center text-gray-400">Initializing editor...</div>
      )}
      {notice && <div className="mt-2 text-sm text-gray-600">{notice}</div>}
    </div>
  )
}

// Image-size selector removed — editor will use the default inserted image classes/styles

function ToolbarButton({ children, onClick, active }) {
  return (
    <button onClick={onClick} type="button" className={`p-2 rounded ${active ? 'bg-coral-500 text-white' : 'bg-gray-100 text-gray-700'}`}>
      {children}
    </button>
  )
}
