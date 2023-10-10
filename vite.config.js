import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/P2.0/",
  plugins: [react()],
  server: {
    port: process.env.PORT || 8080,
    open: true,
  },
})
