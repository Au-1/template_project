<template>
    <div class="container">
        <h1 class="gradient-text">Full Stack Developer</h1>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.gradient-text {
    background-image: linear-gradient(90deg, #f66, #f90);
    background-clip: text;
    -webkit-background-clip: text;
    line-height: 60px;
    font-size: 60px;
    color: transparent;
    animation: hue 5s linear infinite;
}
@keyframes hue {
    from {
        filter: hue-rotate(0);
    }
    to {
        filter: hue-rotate(-1turn);
    }
}
</style>