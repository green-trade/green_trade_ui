<template>
  <div id="app">
    <transition name="fade">
      <div class="loading" v-if="loading">
        <fulfilling-bouncing-circle-spinner
          :animation-duration="2000"
          :size="120"
          :color="'#4ede91'"
        />
      </div>
    </transition>
    <nav-bar />
    <transition name="fade-slide" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { FulfillingBouncingCircleSpinner } from 'epic-spinners';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar,
    FulfillingBouncingCircleSpinner,
  },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>


<style lang="scss">
@import '~@/styles/site.scss';
</style>
