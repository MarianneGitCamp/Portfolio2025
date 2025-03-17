import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio2025/', // Remplacez par le nom de votre dépôt GitHub
  plugins: [react()],
});
