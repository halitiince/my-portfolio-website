const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors : {
                    primary: "#4672fe",
                    secondary: "#CD6371",
                    tertiary: "#FFCD00",
                    darkBg: "#0c0c0c",
                    cpink: "#fe2d5b",
                    corange: "#e66400",
                    cblue: "#0678ff"
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            letterSpacing: {
                wildy: "2px"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}