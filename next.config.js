const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
const redirectVercel = {
      async redirects() {
        return [
          {
            source: '/hello',
            destination: 'https://vercel.com/',
            permanent: true,
          },
        ]
      },
};
      
module.exports = withNextra( redirectVercel );

