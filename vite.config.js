
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FreshCart-front-react/', // this MUST match your GitHub repo name
});