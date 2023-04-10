## 1 npm create vite@latest

## 2 npm install

## 3 npm run dev

## 4 npm install -D tailwindcss

## 5 npm install -D tailwindcss postcss autoprefixer

## 6 npx tailwindcss init -p

## 7 Archivo tailwind.config.js /

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js,jsx.ts.tsx}"],
theme: {
extend: {}
},
plugins: []
};

## 8 Archivo index.css /src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

## 9 npm i sass

## 10 npm i react-router-dom

# Despliegue

## 1 npm i gh-pages -D

## 2 git init

## 3 git add .

## 4 git commit -m 'gh-pages'

## 5

git remote add origin https://github.com/cdazaparra/dc.git
git branch -M main
git push -u origin main

## 6 vite.config.js

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
base: "cdazaparra.github.io/dc"
});

## 7 npm run build

## 8 package.json

"scripts": {
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"deploy": "gh-pages -d dist"
},

## 9 npm run deploy

# Actualizacion

## 1 git add .

## 2 git commit -m 'gh-pages'

## 3 git push

## 4 npm run build

## 5 npm run deploy
