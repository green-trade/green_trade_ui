<template>
    <div class="landing">
        <greeting />
    </div>
</template>

<script>
import Greeting from './Greeting.vue';

export default {
  components: {
    Greeting,
  },
};
</script>

<style lang="scss" scoped>
.landing {
    display: flex;
    justify-content: center;
    align-items: center;

    background: #4ede91;
    background: radial-gradient(ellipse at center, rgba(78,222,145,1) 0%, rgba(53,212,125,1) 100%);

    height: 66.666vh;
}
</style>
