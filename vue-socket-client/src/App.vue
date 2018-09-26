<template>
  <div id="app">
    <header>
      <ul class="nav">
        <li class="nav-item">VUE JS2 + VUEX + SOCKETIO</li>
        <li class="nav-item"><router-link to="/counter">Contador</router-link></li>
        <li class="nav-item"><router-link to="/chat">Chat</router-link></li>
      </ul>
    </header>
    <!-- <img src="./assets/logo.png"> -->
    <div class="container">
      <img src="./assets/logo.png">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
body {
    margin: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    text-align: center;
    margin-top: 40px;
  }

  header {
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
  }

  header li {
    list-style: none;
    margin-top: 15px;
    float: left;
    margin-right: 25px;
  }
  header a {
    color: white;
  }
  header a:hover{
    color: #fff !important;
  }
</style>
