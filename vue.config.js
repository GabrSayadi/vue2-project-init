const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: false,
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = ''
        return args
      })
    if (process.env.VUE_APP_ENV === 'prod') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
      }
    }
  }
}
