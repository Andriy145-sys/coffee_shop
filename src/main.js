// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import './assets/layouts/index.css'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDjv7izdGTG6V_5XF7VwqJOzbjEYYiJjKc',
    libraries: 'places',
    region: 'EN',
    language: 'EN',
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
