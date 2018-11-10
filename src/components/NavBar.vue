<template>
<nav class="container">
    <div class="nav content">
        <div class="logo" @click="goHome">
            <div>GreenTrade</div> <img src="~@/assets/logo.svg">
        </div>
        <ul class="links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
        </ul>
    </div>
</nav>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
    background: #333;
    z-index: 10;
    position: relative;
}

.logo {
    cursor: pointer;
}

.nav {
    display: flex;
    justify-content: space-between;
}

.links {
    display: flex;
    list-style: none;
    margin: 0;
    color: $primary-color;
    align-items: center;
    margin-top: -3px;
    padding-inline-start: 0px;

    a, a:visited, a:link {
        border-color: #333;

        border-bottom-style: solid;
        border-bottom-width: 1px;
        color: #f3f3f3;
        text-decoration: none;
        padding-bottom: 3px;

        letter-spacing: 1.5px;
        // text-transform: uppercase;
        font-family: 'Questrial', sans-serif;

        @include fluid-type($min-screen-width - 50px, $max-screen-width, 10px, 13px);

        transition: border-color 0.3s ease;

        &:hover, &.router-link-exact-active {
            border-color: lighten($primary-color, 20%);
        }
    }

    & > * {
        margin-left: 1rem;
    }
}
</style>
