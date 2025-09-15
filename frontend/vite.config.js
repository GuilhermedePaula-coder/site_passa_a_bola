import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/site_passa_a_bola/', // 👈 coloque o nome do repositório aqui
})
