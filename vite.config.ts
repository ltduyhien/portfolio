import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'hienle-portfolio';

export default defineConfig({
  base: '/',
  plugins: [react()],
});
