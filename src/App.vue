<template>
<div id="app">
  <siteHeader/>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</div>
</template>

<script>
import siteHeader from './components/siteHeader.vue'
export default {
  name: 'App',
  components: {
    siteHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap');
body {
  font-family: 'Rubik', sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .15s ease-in-out;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>

