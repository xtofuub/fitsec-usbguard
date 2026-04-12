---
name: "framer-motion-mcp"
description: "Provides expert-level Framer Motion animations, transitions, and component architecture. Invoke when user wants to add, refine, or debug animations or complex UI interactions."
---

# Framer Motion (v12/motion) Expert Skill

This skill provides comprehensive knowledge and guidance for Framer Motion, specifically focusing on the new `motion` package (v12+). Use it to create high-end cinematic UI animations, complex layout transitions, and interactive components.

## Core Concepts

### 1. The `motion` Component
Framer Motion provides a `motion` object that can be used to create animated versions of standard HTML/SVG elements.
```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>
```

### 2. Variants
Variants allow you to define sets of states for your animations, making the code cleaner and easier to manage.
```tsx
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

<motion.div
  variants={itemVariants}
  initial="hidden"
  animate="visible"
/>
```

### 3. Layout Animations
Enable automatic layout transitions by adding the `layout` prop. Use `layoutId` for shared element transitions.
```tsx
<motion.div layout />
<motion.div layoutId="unique-id" />
```

### 4. Gestures
Built-in support for hover, tap, drag, and focus.
```tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
/>
```

### 5. Scroll Animations
Use `whileInView` for simple enter-view animations or `useScroll` for complex scroll-driven effects.
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
/>
```

## Best Practices

- **Performance**: Use `transform` and `opacity` whenever possible, as they are hardware-accelerated.
- **Variants**: Always use variants for complex components to keep the JSX clean.
- **AnimatePresence**: Use for exit animations when components are removed from the DOM.
- **Version 12**: Note that `framer-motion` has been rebranded as `motion`. In v12, the package is `motion`, and for React, it is `motion/react`.

## Advanced Patterns

- **Stagger Children**: Use variants with `staggerChildren` to create sequential animations.
- **Custom Easing**: Use `ease: [0.25, 0.1, 0.25, 1]` or other cubic-bezier curves for a premium feel.
- **Layout Camera**: For complex shared layout animations between different components.
