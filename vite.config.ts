import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks:{
                    'react-vendor': ['react', 'react-dom'],
                    'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', 'three-stdlib'],
                    'three-extras': ['@react-three/a11y']
                }
            }
        }
    }
})
