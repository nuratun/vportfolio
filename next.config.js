const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')

module.exports = withNextra(), 
  async redirects() {
        return [
          {
            source: '/hello',
            destination: 'https://vercel.com',
            permanent: true,
          },
        ]
      },
