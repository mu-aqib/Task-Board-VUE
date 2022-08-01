const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: false,

  // css: {
  //   loaderOptions:{
  //     sass: {
  //       additionalData: `@import '~@/_shared.scss'`
  //     }
  //   }
  // }
});
