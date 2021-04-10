module.exports = {
  extend(config) {
    config.module?.rules.push({
      test: /\.vue$/,
      loader: "vue-windicss-preprocess",
      options: {
        config: "windi.config.ts",
        compile: true,
        globalPreflight: true,
        globalUtility: true,
        prefix: "eco-",
      },
    });
  },
};
