import { defineConfig } from 'windicss/helpers';

export default defineConfig({
    extract: {
        include: ['**/*.{jsx,tsx,css}'],
        exclude: ['node_modules', '.git', '.next'],
    },
    important: true,
    theme: {
        screens: {
            xs: '320px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1024px',
            '2xl': '1600px',
        },
        extend: {
            colors: {
                primary: '#293140',
                secondary: '#5b5857',
            },
        },
    },
    preflight: true,
});
