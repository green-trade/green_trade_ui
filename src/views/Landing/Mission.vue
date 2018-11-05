<template>
<div class="container">
    <div class="content mission">
        <div class="points">
            <h2 class="hug">Helping you sell more, and stress less</h2>
        </div>
    </div>
</div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.container {
    background: url('~@/assets/business.jpg');
    background-position: 50% 50%;
    background-size: cover;
}
.content {
    display: flex;
    flex-direction: center;
}
.mission {
    color: #f3f3f3;
    height: 66.666vh;

    display: grid;
    grid-template-columns: 1fr 2fr;
}
.points {
    background: rgba(0, 0, 0, 0.5);
    padding: 1rem;
}
</style>
