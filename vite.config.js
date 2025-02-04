import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/riciclami/' // 👈 Usa il nome del repository come base URL
});
