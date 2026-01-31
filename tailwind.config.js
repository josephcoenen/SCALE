module.exports = {
    content: ["./index.html", "./main.js"],
    theme: {
        extend: {
            colors: {
                steel: '#64748b',
                galvanized: '#94a3b8',
                'solar-blue': '#1e3a8a',
                'solar-black': '#020617',
                'safety-amber': '#f59e0b',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "radial-gradient(circle, rgba(148, 163, 184, 0.1) 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
}
