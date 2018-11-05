<template>
<div>
    <h1 class="title hug">Welcome to GreenTrade</h1>
    <div class="greeting">
        <div class="words">
            The world's first open source Cannabis POS Platform.
        </div>
        <div class="options">
            <a class="button is-normal is-inverted is-outlined">Become A Retailer</a>
            <a class="button is-normal is-warning">Log In</a>
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.greeting {
    padding: 1.5rem 1.77rem;
    background: rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    border-radius: 10px;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
    color: #f3f3f3;

    margin: 1rem 2rem;
}

h1 {
    color: #f3f3f3;
    text-align: center;
    @include fluid-type($min-screen-width, $max-screen-width, 27px, 59px);
}

.words {
    margin-bottom: 1rem;
    font-style: italic;
}

.button {
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);

    padding: 0.5rem 1rem;
    display: inline-block;
    text-align: center;

    background-color: darken(#F3B129, 5%);
    color: #f3f3f3;
    border-radius: 5px;
    border: 2px solid darken(#F3B129, 10%);
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        background-color: #f3f3f3;
        color: #444;
        border-color: rgba(0, 0, 0, 0);
    }
}


.options {
    display: flex;
    justify-content: space-between;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
}
</style>
