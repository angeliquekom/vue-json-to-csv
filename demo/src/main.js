// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import VueJsonToCsv from './../../dist/vue-json-to-csv'
import App from './App'

Vue.use(Vuetify)

Vue.config.productionTip = false
// Vue.component('VueJsonToCsv', VueJsonToCsv);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
