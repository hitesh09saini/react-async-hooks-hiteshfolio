import { defineConfig } from "rollup";
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: 'dist',
    format: 'esm', // Use ES modules for better compatibility
    sourcemap: true
  },
  external: ["react", "react-dom"], // Include hiteshfolio.slider.css here
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    
  ]
});