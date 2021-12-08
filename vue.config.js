module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/app": {
        target: "http://localhost:4000",
        changeOrigin: true,
        ws: false,
      },
    },
  },
};
