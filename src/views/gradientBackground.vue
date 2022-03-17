<template>
    <div class="container">渐变背景</div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(135deg, #f66, #f90, #3c9, #09f, #66f) left
        center/400% 400%;

    font-weight: 600;
    font-size: 60px;
    color: #fff;
    animation: move 10s infinite;
}

@keyframes move {
    0%,
    100% {
        background-position-x: left;
    }
    50% {
        background-position-x: right;
    }
}
</style>