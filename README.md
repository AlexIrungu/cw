# Tailwind CSS v3 Setup for React

## 1. Install Tailwind CSS v3 (Downgrade from v4)

First, uninstall the current version and install v3:

```bash
npm uninstall tailwindcss
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
npx tailwindcss init -p
```

This creates `tailwind.config.js` and `postcss.config.js` files.

## 2. Configure your template paths

Update your `tailwind.config.js` file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 3. Add Tailwind directives to your CSS

Create or update your main CSS file (usually `src/index.css` or `src/App.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Import CSS in your React app

Make sure your main CSS file is imported in your `src/index.js` or `src/main.jsx`:

```javascript
import './index.css';
```

## 5. Start using Tailwind classes

You can now use Tailwind classes in your React components:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Hello Tailwind!
        </h1>
        <p className="text-gray-600">
          Tailwind CSS is working in your React project.
        </p>
      </div>
    </div>
  );
}
```

## Additional Configuration (Optional)

### Custom Colors
Add custom colors to your theme:

```javascript
// tailwind.config.js
module.exports = {
  // ... other config
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      }
    },
  },
}
```

### Plugins
Popular Tailwind plugins you might want to add:

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography
```

Then add them to your config:

```javascript
// tailwind.config.js
module.exports = {
  // ... other config
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## Troubleshooting

- **Styles not applying**: Check that your content paths in `tailwind.config.js` match your file structure
- **Build size concerns**: Tailwind automatically purges unused styles in production
- **Custom CSS not working**: Make sure custom styles come after the Tailwind directives or use `@layer` directive

## Development Tips

- Use the Tailwind CSS IntelliSense extension for VS Code
- Keep the [Tailwind documentation](https://tailwindcss.com/docs) handy
- Use `npx tailwindcss -i ./src/input.css -o ./src/output.css --watch` for manual builds if needed


# Premium Animated Portfolio Recommendations
*React + Tailwind + GSAP + Three.js | Inspired by Codegrid's Creative Excellence*

## 🎨 **EMOTIONAL TYPOGRAPHY STACK**

### Primary Emotional Fonts
```css
/* Install these premium emotional fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
```

### Font Hierarchy Strategy
- **Hero Headlines**: Playfair Display (dramatic, editorial feel)
- **Section Titles**: Cormorant Garamond (elegant, artistic)
- **Body Text**: Crimson Text (readable, sophisticated)
- **Accent Text**: Libre Baskerville (intimate, personal)

## 🚀 **ANIMATION TECHNOLOGY STACK**

### Core Animation Libraries
```bash
npm install gsap @gsap/react three @types/three @react-three/fiber @react-three/drei
npm install framer-motion react-intersection-observer
npm install locomotive-scroll react-locomotive-scroll
npm install react-spring @react-spring/parallax
```

### GSAP Plugins (Premium)
```javascript
// Register GSAP plugins
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(ScrollTrigger, TextPlugin, MorphSVGPlugin, DrawSVGPlugin)
```

## 🎭 **PORTFOLIO STRUCTURE & ANIMATIONS**

### 1. **HERO SECTION - "Emotional Impact Landing"**
```jsx
// Codegrid-inspired entrance animation
const HeroSection = () => {
  useEffect(() => {
    // Text reveal animation with emotional timing
    gsap.timeline()
      .from('.hero-name', { 
        duration: 2, 
        y: 100, 
        opacity: 0, 
        ease: 'power4.out',
        delay: 0.5 
      })
      .from('.hero-title', { 
        duration: 1.5, 
        opacity: 0, 
        text: '', 
        ease: 'none' 
      }, '-=1')
      .from('.hero-description', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        stagger: 0.1 
      }, '-=0.5')
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-night via-rose-quartz/20 to-ivory">
      <div className="text-center space-y-8">
        <h1 className="hero-name font-playfair text-8xl font-bold text-electric-indigo">
          [Client Name]
        </h1>
        <h2 className="hero-title font-cormorant text-3xl text-night/80">
          Creative Visionary & Digital Artist
        </h2>
        <p className="hero-description font-crimson text-lg text-night/60 max-w-2xl mx-auto leading-relaxed">
          Crafting emotional experiences through design, where every pixel tells a story and every interaction sparks connection.
        </p>
      </div>
    </section>
  )
}
```

### 2. **THREE.JS BACKGROUND ELEMENTS**
```jsx
// Floating geometric art inspired by Codegrid's aesthetics
const ThreeBackground = () => {
  return (
    <Canvas className="fixed inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      
      {/* Animated floating elements */}
      <FloatingGeometry />
      <ParticleSystem />
      <MorphingShapes />
    </Canvas>
  )
}
```

### 3. **PROJECT SHOWCASE - "Magnetic Hover Effects"**
```jsx
const ProjectCard = ({ project }) => {
  const cardRef = useRef()
  
  useEffect(() => {
    const card = cardRef.current
    
    // Codegrid-style magnetic effect
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      gsap.to(card, {
        duration: 0.3,
        rotationX: y / 20,
        rotationY: x / 20,
        transformPerspective: 1000,
        ease: 'power2.out'
      })
    }
    
    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.5,
        rotationX: 0,
        rotationY: 0,
        ease: 'power2.out'
      })
    }
    
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={cardRef}
      className="group relative bg-ivory/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
    >
      {/* Project content with reveal animations */}
    </div>
  )
}
```

## 🌊 **PAGE TRANSITION ANIMATIONS**

### Locomotive Scroll Integration
```jsx
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

const App = () => {
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
        class: 'is-revealed'
      }}
    >
      <main data-scroll-container>
        {/* All sections with data-scroll attributes */}
      </main>
    </LocomotiveScrollProvider>
  )
}
```

### Section Transitions
```javascript
// Codegrid-inspired section reveals
gsap.utils.toArray('.section').forEach(section => {
  gsap.fromTo(section, 
    { 
      opacity: 0, 
      y: 100 
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  )
})
```

## 🎨 **FONT ANIMATIONS - EMOTIONAL STORYTELLING**

### 1. **Typewriter Effect with Emotional Pauses**
```javascript
const emotionalTypewriter = (element, text) => {
  gsap.to(element, {
    duration: text.length * 0.1,
    text: text,
    ease: 'none',
    onUpdate: function() {
      // Add emotional pauses at commas and periods
      if (this.progress() > 0.3 && this.progress() < 0.35) {
        gsap.delayedCall(0.5, () => {})
      }
    }
  })
}
```

### 2. **Text Morphing Effects**
```javascript
// Words that transform based on scroll position
const morphingText = () => {
  ScrollTrigger.create({
    trigger: '.morph-text',
    start: 'top center',
    end: 'bottom center',
    onUpdate: self => {
      const words = ['Creative', 'Passionate', 'Innovative', 'Visionary']
      const index = Math.floor(self.progress * words.length)
      gsap.to('.morph-text', {
        text: words[index],
        duration: 0.5,
        ease: 'power2.out'
      })
    }
  })
}
```

## 🎪 **CODEGRID-INSPIRED VISUAL EFFECTS**

### 1. **Gradient Blob Animations**
```jsx
const AnimatedBlob = () => {
  useEffect(() => {
    gsap.to('.blob', {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: 'none'
    })
    
    gsap.to('.blob path', {
      duration: 6,
      morphSVG: '[alternative path data]',
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    })
  }, [])

  return (
    <svg className="blob absolute -z-10 w-96 h-96 opacity-20">
      <path d="[complex blob path]" fill="url(#gradient)" />
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#5D2DE6" />
          <stop offset="100%" stopColor="#B6244F" />
        </linearGradient>
      </defs>
    </svg>
  )
}
```

### 2. **Particle System Integration**
```jsx
const ParticleBackground = () => {
  return (
    <Canvas>
      <Points ref={pointsRef} positions={positions} colors={colors}>
        <pointsMaterial
          size={2}
          vertexColors
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </Points>
    </Canvas>
  )
}
```

## 🌈 **COLOR PALETTE INTEGRATION**

### Dynamic Color Transitions
```javascript
// Color palette shifts based on section
const colorTransitions = {
  hero: ['night', 'electric-indigo'],
  about: ['rose-quartz', 'ivory'],
  projects: ['burnt-umber', 'amaranth-purple'],
  contact: ['electric-indigo', 'night']
}

ScrollTrigger.batch('.section', {
  onEnter: (elements) => {
    elements.forEach(el => {
      const sectionName = el.dataset.section
      gsap.to('body', {
        backgroundColor: `var(--${colorTransitions[sectionName][0]})`,
        duration: 1.5,
        ease: 'power2.out'
      })
    })
  }
})
```

## 🎯 **PERFORMANCE OPTIMIZATION**

### GSAP Performance Best Practices
```javascript
// Use will-change for animated elements
gsap.set('.animated-element', { will-change: 'transform' })

// Batch DOM queries
const elements = gsap.utils.toArray('.animate')

// Use transforms instead of changing layout properties
gsap.to(element, { x: 100, y: 50, scale: 1.2 }) // ✅ Good
gsap.to(element, { left: 100, top: 50, width: 120 }) // ❌ Avoid
```

## 📱 **RESPONSIVE ANIMATION STRATEGY**

```javascript
// Conditional animations based on screen size
const mm = gsap.matchMedia()

mm.add("(min-width: 768px)", () => {
  // Desktop animations
  gsap.timeline()...
})

mm.add("(max-width: 767px)", () => {
  // Mobile-friendly animations
  gsap.timeline()...
})
```

## 🎬 **FINAL RECOMMENDATIONS**

1. **Emotional Pacing**: Use 1.5-2 second delays between major animations
2. **Storytelling Flow**: Each section should feel like a chapter in her story
3. **Interactive Elements**: Cursor follows, hover states, click reactions
4. **Loading Experience**: Beautiful preloader with percentage counter
5. **Sound Design**: Subtle audio feedback for interactions (optional)
6. **Dark/Light Mode**: Toggle with smooth GSAP transitions
7. **Performance**: Keep animations under 60fps, use `will-change` sparingly

## 🔧 **IMPLEMENTATION PRIORITY**

1. **Week 1**: Font setup, basic GSAP animations, hero section
2. **Week 2**: Three.js integration, project showcase animations  
3. **Week 3**: Page transitions, locomotive scroll, font animations
4. **Week 4**: Polish, optimization, responsive refinements

This approach will create a portfolio that feels alive, emotional, and professionally crafted - exactly what Codegrid represents in their aesthetic philosophy.