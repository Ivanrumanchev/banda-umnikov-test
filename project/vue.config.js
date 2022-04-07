module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/styles.scss";',
      },
      css: {
        modules: {
          localIdentName: '[name]-[local]-[hash:base64:5]',
        },
        localsConvention: 'camelCaseOnly',
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/banda-umnikov-test/'
  : '/',
};
