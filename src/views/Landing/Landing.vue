<template>
    <div class="landing">
        <greeting />
        <!-- <mission /> -->
    </div>
</template>

<script>
import Greeting from './Greeting.vue';
// import Mission from './Mission.vue';

export default {
  components: {
    Greeting,
    // Mission,
  },
};
</script>

<style lang="scss" scoped>
body {
    background: #555;
    height: 100vh;
}
</style>
