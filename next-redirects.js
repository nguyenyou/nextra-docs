async function redirects() {
  return [
    {
      source: '/',
      destination: '/docs/introduction',
      permanent: true,
    },
    {
      source: '/docs',
      destination: '/docs/introduction',
      permanent: true,
    },
  ]
}

module.exports = redirects
