const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    webpack(config) {
        config.plugins.push(new WindiCSSWebpackPlugin());
        return config;
    },
    remotePatterns: [
        {
            protocol: 'https',
        },
    ],
    images: {
        domains: ['images.unsplash.com', 'i.pinimg.com'],
    },
};

module.exports = nextConfig;
