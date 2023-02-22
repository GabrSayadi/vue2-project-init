const path = require('path');
module.exports = ({file}) => {
  const designWidth = path.join(file).includes(path.join('node_modules', 'vant')) ? 375 : 750;
  return {
    plugins: {
      'postcss-rtl': {},
      autoprefixer: {
        overrideBrowserslist: [
          "Android 4.1",
          "iOS 7.1",
          "Chrome > 31",
          "ff > 31",
          "ie >= 8"
        ],
        grid: true
      },
      'postcss-px-to-viewport': {
        viewportWidth: designWidth,
        unitToConvert: 'px',
        exclude: []
      },

    }
  }
}
