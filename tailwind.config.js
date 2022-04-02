// tailwind.config.js
module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    content: [
        './public/**/*.html',
        './src/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
        '../../libs/**/*.{astro,md,js,jsx,svelte,ts,tsx,vue}',
      ],
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: 
        [
            {
                "tutors": {
                    "primary": "#37919B",
                    "primary-focus": "#2C747C",
                    "primary-content": "#ffffff",
                    "secondary": "#73379B",
                    "secondary-focus": "#5C2C7C",
                    "secondary-content": "#ffffff",
                    "accent": "#5F9B37",
                    "accent-focus": "#4C7C2C",
                    "accent-content": "#ffffff",
                    "neutral": "#2d2a32",
                    "neutral-focus": "#242128",
                    "neutral-content": "#ffffff",
                    "base-100": "#fbfbfc",
                    "base-200": "#f6f6f6",
                    "base-300": "#f2f3f5",
                    "base-content": "#1f2937",
                    "info": "#37919b",
                    "success": "#557927",
                    "warning": "#d27711",
                    "error": "#ba5150",
                    "font-family": ["Inter, sans-serif"]
                  }, "tutors-dark": {
                    "primary": "#37919b",
                    "primary-focus": "#2C747C",
                    "primary-content": "#ffffff",
                    "secondary": "#f000b8",
                    "secondary-focus": "#bd0091",
                    "secondary-content": "#ffffff",
                    "accent": "#37cdbe",
                    "accent-focus": "#2aa79b",
                    "accent-content": "#ffffff",
                    "neutral": "#2a2e37",
                    "neutral-focus": "#16181d",
                    "neutral-content": "#ebecf0",
                    "base-100": "#3d4451",
                    "base-200": "#2a2e37",
                    "base-300": "#16181d",
                    "base-content": "#ebecf0",
                    "info": "#37919b",
                    "success": "#557927",
                    "warning": "#d27711",
                    "error": "#ba5150",
                    "font-family": ["Inter, sans-serif"]
                  },
            },
        ],
    },
};