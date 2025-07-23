/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    env: {
        stackbitPreview: process.env.STACKBIT_PREVIEW
    },
    trailingSlash: true,
    webpack: (config) => {
        if (!config.watchOptions) {
            config.watchOptions = {};
        }

        if (!config.watchOptions.ignored) {
            config.watchOptions.ignored = [];
        } else if (typeof config.watchOptions.ignored === 'string') {
            config.watchOptions.ignored = [config.watchOptions.ignored];
        }

        config.watchOptions.ignored.push('**/content/pages/**');

        return config;
    }
};

module.exports = nextConfig;
