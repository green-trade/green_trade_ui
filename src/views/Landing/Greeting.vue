<template>
<div class="greeting-container">
    <h1 class="title hug">
        <img src="~@/assets/white_logo.svg"><br />
        Welcome to GreenTrade
    </h1>
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
$greeting-breakpoint: $min-screen-width + 120px;

.greeting-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background: #4ede91;
    background: radial-gradient(ellipse at center, rgba(78,222,145,1) 0%, rgba(53,212,125,1) 100%);

    height: 66.666vh;
    border-bottom: 12px solid rgba(0,0,0,0.3);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.33);
}
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
    @include fluid-type($min-screen-width, $max-screen-width, 27px, 70px);
}

.title img {
    width: 5rem;
    height: 5rem;
}

.words {
    margin-bottom: 1rem;
    font-style: italic;
    font-weight: bold;

    @media only screen and (max-width: $greeting-breakpoint) {
        text-align: center;
        margin-bottom: 2rem;
    }
}

.button {
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    @include fluid-type($min-screen-width, $max-screen-width, 13px, 18px);
    font-weight: bold;

    padding: 0.5rem 1rem;
    display: inline-block;
    text-align: center;

    background-color: darken(#F3B129, 5%);
    color: #f3f3f3;
    border-radius: 5px;
    border: 2px solid darken(#F3B129, 10%);
    transition: all 0.2s ease;

    &:hover {
        cursor: pointer;
        background-color: #f3f3f3;
        color: darken($primary-color, 20%);
        border-color: $primary-color;

        transform: translateZ(-3px) scale(1.05);

        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    }
}


.options {
    display: flex;
    justify-content: space-between;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    @media only screen and (max-width: $greeting-breakpoint) {
        display: block;

        .button {
            display: block;
            width: 100%;
            margin-bottom: 0.5rem;
        }
    }
}
</style>
