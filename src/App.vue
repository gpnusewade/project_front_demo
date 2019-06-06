<template>
  <div id="app">
    <pm-header></pm-header>
    <router-view to="/login"></router-view>
  </div>
</template>

<script>
import pmHeader from './components/base/header';

export default {
  name: 'app',
  components: {
    pmHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
