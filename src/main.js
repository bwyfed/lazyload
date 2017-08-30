import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
    preLoad: 13,
    error: require('./assets/img/logo.png'),
    loading: require('./assets/img/loading.gif'),
    attempt: 1,
    listenEvents: ['scroll'],
    adapter: {
      loaded({ bindType, el, naturalHeight, naturalWidth, $parent, src, loading, error, Init }){
        console.log('loaded:'+src)
      },
      loading(listener, Init) {
        console.log('loading:',listener.src)
      },
      error(listener, Init) {
        console.log('error');
      }
    }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
