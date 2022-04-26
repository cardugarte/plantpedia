const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  env: {
    spaceId: 'x3wnj8s68ndy',
    managementToken: 'CFPAT-p2Bknm50fCizA6Mi6NZzWbspcfYvj3Hw3qra_appFzU',
    urlApiBase: 'https://graphql.contentful.com/content/v1/spaces/',
    contentDeliveryApi: 'zg0Zd7tDTRm1YLGIILFyKDAFRn6JzGKHf7tME-SdA0Y',
    contentPreviuApi: 'JNTQ1y792NyaapxhYNXtyknEGzWfO4_BadSl024hrRc',
  },
}

module.exports = withBundleAnalyzer(config)
