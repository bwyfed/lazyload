import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 13,
    error: require('./assets/img/logo.png'),
    loading: require('./assets/img/loading.gif'),
    attempt: 1
})

new Vue({
  el: '#app',
  render: h => h(App)
})
