/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/*.{vue,js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Fira Code', 'monospace'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    plugins: [],
    corePlugins: {
        fontFamily: true, // Ensures font family utilities are generated
    }
}
