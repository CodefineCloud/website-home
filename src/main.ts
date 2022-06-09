import './style.scss'
import logoUrl from "@/static/images/logo.png";

// @ts-ignore
const app = document.querySelector<HTMLDivElement>('#app')!

const image = app.querySelector<HTMLImageElement>("img")!;

image.src = logoUrl;

// app.innerHTML = `
//   <h1>Home Page by Vite.js</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
