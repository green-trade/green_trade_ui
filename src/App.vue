<template>
  <div id="app">
    <nav-bar />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>


<style lang="scss">
@import '~@/styles/site.scss';
</style>
