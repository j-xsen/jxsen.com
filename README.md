# jxsen.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc3f5e94-1805-4066-b4b1-6d579f4cd9c9/deploy-status)](https://app.netlify.com/projects/jaxsen/deploys)

A personal portfolio website built with React Three Fiber, featuring an interactive 3D environment with accessibility support.

## Live Site
Visit the live site at [jxsen.com](https://jxsen.com?utm_source=github&utm_medium=link&utm_campaign=Jaxsenation&utm_content=jxsen-readme)

## Technologies Used

- **React** - Frontend framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **React Three A11y** - Accessibility features for React Three Fiber
- **TypeScript** - Type safety and enhanced developer experience
- **Vite** - Build tool and development server

## Features

- Interactive 3D environment
- Accessible design with ARIA support
- Animated 3D typography
- Interactive elements including:
  - GitHub profile link
  - Email contact
  - Custom 3D models
  - Orbital controls for scene navigation

## Development

### Prerequisites

- Node.js
- pnpm package manager

### Installation

1. Clone the repository
```bash
git clone git@github.com:j-xsen/jxsen.com.git
```
2. Install dependencies
```bash
pnpm install
```
3. Start the development server
```bash
pnpm dev
```
### Building for Production

To create a production build:
```bash
pnpm build
```

## Deployment

This site is automatically deployed to Netlify. Any pushes to the main branch will trigger a new deployment.

## Accessibility

This project implements accessibility features through @react-three/a11y, ensuring that 3D content is accessible to screen readers and keyboard navigation.

