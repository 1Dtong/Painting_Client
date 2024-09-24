module.exports = {
    plugins: {
      'postcss-pxtorem': {
        rootValue: 37.5, // 设计稿宽度除以 10，一般情况下是 37.5
        propList: ['*'], // 需要转换的属性，这里选择全部属性
      },
    },
  };
  