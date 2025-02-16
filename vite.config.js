// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: './index.html',
                page1: './pages/survey-form.html',
                page2: './pages/tribute-page.html',
                page3: './pages/technical-documentation.html',
                page4: './pages/product-landing-page.html',
                page5: './pages/personal-portfolio.html',
            },
        },
    },
});
