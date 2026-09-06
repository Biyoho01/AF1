import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Add the `assetsInclude` option to allow importing .png files
  assetsInclude: ['**/*.png'],
});
