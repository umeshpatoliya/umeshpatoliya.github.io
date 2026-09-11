import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // This repo is a GitHub *user* site (umeshpatoliya.github.io), which is
  // served from the domain root, so the base path stays '/'.
  // For a project repo you would use '/<repo-name>/' instead.
  base: '/',
  plugins: [react(), tailwindcss()],
})
