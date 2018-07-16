import JsonToCsv from './JsonToCsv.vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-json-to-csv', JsonToCsv)
  }
}
