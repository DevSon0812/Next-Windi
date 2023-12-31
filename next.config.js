const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    notFound: {
        page: '/custom-404',
    },
    webpack(config) {
        config.plugins.push(new WindiCSSWebpackPlugin());
        return config;
    },

    images: {
        domains: ['images.unsplash.com', 'i.pinimg.com', 'images.pexels.com'],
    },
};

module.exports = nextConfig;
