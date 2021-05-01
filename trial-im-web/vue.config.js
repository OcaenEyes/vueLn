module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'OCEAN IM'
    }
  }
}
