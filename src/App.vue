<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <h1>{{ msg }}</h1>
    <!--<img src="" class="logo" v-lazy="imgLogo">-->
    <!--<div class="bg-company" v-lazy:background-image="imgIcon"></div>-->
    <ul>
      <li v-for="item in imgUrl">
        <img v-lazy="item.src" alt="" width="100%" height="auto"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import "./assets/scss/site.scss"
  import Vue from 'vue'
  import VueLazyLoad from 'vue-lazyload'
//  import VueLazyLoad from "vue-lazyload"
export default {
  name: 'app',
  data () {
    return {
        msg: 'Welcome to Your Vue.js App',
        imgLogo: require('./assets/img/logo.png'),
        imgIcon: require('./assets/img/pic-1.jpg'),
        imgUrl: [
            {src: require('./assets/img/pic-1.jpg')},
            {src: require('./assets/img/pic-2.jpg')},
            {src: require('./assets/img/pic-3.jpg')},
            {src: require('./assets/img/pic-4.jpg')},
            {src: require('./assets/img/pic-1.jpg')},
            {src: require('./assets/img/pic-2.jpg')},
            {src: require('./assets/img/pic-3.jpg')},
            {src: require('./assets/img/pic-4.jpg')},
            {src: require('./assets/img/pic-1.jpg')},
            {src: require('./assets/img/pic-2.jpg')},
            {src: require('./assets/img/pic-3.jpg')},
            {src: require('./assets/img/pic-4.jpg')}
        ]
    }
  },
    mounted() {
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
    }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .img-list {
    img {
      display: block;
      width: 100%;
      background: url(./assets/img/loading.gif) 50% no-repeat;
    }
  }

  img {
    border: none;
  }
  img[src=""] {
    opacity: 0;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
  .bg-company {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
