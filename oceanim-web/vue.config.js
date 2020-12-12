module.exports = {
  devServer: {
    proxy: {
      '/':{
        ws:false
      }
    }
  }
}
