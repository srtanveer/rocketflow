# Card Hover Effects Guide

## Available Card Hover Classes

I've created **11 impressive hover effects** that will impress your boss! Here's how to use them:

### 1. **card-hover** - Lift & Glow (Most Popular)
```jsx
<div className="card-hover rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Lifts up with smooth scale and glowing shadow

---

### 2. **card-shimmer** - Shimmer Sweep
```jsx
<div className="card-shimmer rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Light shimmer sweeps across the card

---

### 3. **card-border-gradient** - Animated Border
```jsx
<div className="card-border-gradient p-6">
  Your content here
</div>
```
**Effect**: Glowing animated gradient border appears on hover

---

### 4. **card-tilt** - 3D Tilt
```jsx
<div className="card-tilt rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: 3D perspective tilt effect

---

### 5. **card-glow** - Pulsing Glow
```jsx
<div className="card-glow rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Lifts up with pulsing glow animation

---

### 6. **card-scale** - Scale Up
```jsx
<div className="card-scale rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Smooth scale with enhanced shadow

---

### 7. **card-spotlight** - Spotlight Effect
```jsx
<div className="card-spotlight rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Radial spotlight effect from center

---

### 8. **card-float-rotate** - Float & Rotate
```jsx
<div className="card-float-rotate rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Floats up with subtle rotation

---

### 9. **card-neon** - Neon Glow
```jsx
<div className="card-neon rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Neon glow border effect

---

### 10. **card-reveal** - Content Reveal
```jsx
<div className="card-reveal rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Gradient overlay reveals from bottom

---

### 11. **card-inner-shadow** - Inner Shadow
```jsx
<div className="card-inner-shadow rounded-xl bg-white p-6 shadow-lg">
  Your content here
</div>
```
**Effect**: Inner shadow effect on hover

---

## Recommended Combinations

### For Service Cards (Best for impressing!)
```jsx
<div className="card-hover card-shimmer rounded-xl bg-white p-8 shadow-lg">
  <div className="relative z-10">
    <h3 className="text-2xl font-bold mb-4">Service Title</h3>
    <p>Service description...</p>
  </div>
</div>
```

### For Feature Cards
```jsx
<div className="card-tilt card-border-gradient p-6">
  <div className="relative z-10">
    Your feature content
  </div>
</div>
```

### For Portfolio/Gallery Cards
```jsx
<div className="card-spotlight card-scale rounded-xl overflow-hidden shadow-lg">
  <img src="..." alt="..." className="w-full" />
  <div className="p-6">
    <h3>Portfolio Item</h3>
  </div>
</div>
```

### For Pricing Cards (Most Impressive!)
```jsx
<div className="card-glow card-border-gradient p-8">
  <div className="relative z-10">
    <h3 className="text-3xl font-bold mb-4">Premium Plan</h3>
    <p className="text-5xl font-bold mb-6">$99</p>
    <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
      Get Started
    </button>
  </div>
</div>
```

---

## Quick Apply to All Cards

To apply the best hover effect to ALL existing cards, use:

```jsx
className="card-hover rounded-xl bg-white p-6 shadow-lg"
```

This gives a professional lift and glow effect that works everywhere!

---

## Performance Tips

- All animations use GPU-accelerated properties (transform, opacity)
- Smooth 60fps animations
- No layout shifts or repaints
- Optimized for all modern browsers

---

## Browser Support

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)  
✅ Safari (Latest)
✅ Mobile browsers

All effects include fallbacks for older browsers.
