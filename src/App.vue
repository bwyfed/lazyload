<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div class="img-list">
      <img src="./assets/img/blank.gif" alt="Photo" data-echo="./assets/img/pic-1.jpg">
      <img src="./assets/img/blank.gif" alt="Photo" data-echo="./assets/img/pic-2.jpg">
      <img src="./assets/img/blank.gif" alt="Photo" data-echo="./assets/img/pic-3.jpg">
    </div>
  </div>
</template>

<script>
  import "./assets/scss/site.scss"
  import echo from "echo-js"
//  const echo = require("echo-js");
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
    mounted() {
//      let globalecho = echo.bind()
        echo.init({
            offset: 100,
            throttle: 250,
            unload: false,
            callback: function (element,op) {
                console.log(element,' has been ', op + 'ed');
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
</style>
