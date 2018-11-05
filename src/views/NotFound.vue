<template>
<div class="not-found container">
    <div class="content">
        <h1>
            Not Found
        </h1>
        <div>
            Sorry we can't find the page you're looking for,
            it might have never existed or you might have copied it wrong.
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.not-found {
    padding: 1.5rem;

    @media only screen and (max-width: $min-screen-width) {
        padding: 0;

    }
}

h1 {
    // color: darken($primary-color, 25%);
    padding-bottom: 0.25rem;
    border-bottom: 2px dashed $primary-color;
}

div {
    color: darken($primary-color, 45%);
}
</style>
