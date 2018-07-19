module.exports = {
  head: {
    title: 'bunting commerce',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test spa' }
    ],
  },
  loading: { color: '#b56d82' },
  build: {
    extend(config, { isDev, isClient }){
      config.node = { fs: "empty", child_process: "empty" }
    }
  },
  mode: "spa",
}
