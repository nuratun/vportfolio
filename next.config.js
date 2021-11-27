const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const redirectVercel = {
      async redirects() {
        return [
          {
            source: '/hello',
            destination: 'https://vercel.com/',
            permanent: false,
          },
        ]
      },
};
      
module.exports = withNextra( redirectVercel );

