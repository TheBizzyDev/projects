import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'

new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
})
