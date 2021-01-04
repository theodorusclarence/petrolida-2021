module.exports = {
    purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#171848',
                hover: '#292b88',
                third: '#C4DF9B'
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
