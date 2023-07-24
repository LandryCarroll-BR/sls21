const { withFaust, getWpHostname } = require('@faustwp/core');

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withFaust({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sls21.wpengine.com',
        port: '',
        pathname: '/wp-content/uploads/**/*',
      },
    ],
  },
});
