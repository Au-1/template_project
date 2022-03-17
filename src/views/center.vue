<!-- 最简单的垂直水平居中 -->
<template>
    <div class="container">
        <div class="box"></div>
    </div>
</template>
<style scoped>
.container {
    display: flex; 
}
.box {
    margin: auto;
    height: 100px;
    width: 100px;
    background-color: red;
}
</style>