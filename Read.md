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
