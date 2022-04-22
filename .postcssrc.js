module.exports = {
  plugins: {
    autoprefixer: {},
    // 将 px 转换为 rem
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
