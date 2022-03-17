<template>
    <div class="container">
        <blockquote class="box"></blockquote>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: url("/wall (10).jpg") fixed 0 / cover; */
}

/* 方案一：火狐不支持 backdrop-filter */
/* .box {
    width: 500px;
    height: 250px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 50px 40px; 
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

    backdrop-filter: blur(14.5px);
    -webkit-backdrop-filter: blur(14.5px);
} */

/* 方案二, 通用,利用 blur,z-index,::before */
.container,
.box::before {
    background: url("/wall (10).jpg") fixed 0 / cover;
}

.box {
    position: relative;
    width: 800px;
    height: 400px;
    box-sizing: border-box;
    border: 1px solid #b8c8be;
    border-radius: 5px;

    z-index: 1;
    overflow: hidden;
}

.box::before {
    content: ""; 

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    z-index: -1;
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    -ms-filter: blur(20px);
    -o-filter: blur(20px);
    filter: blur(20px);

    margin: -30px;
}
</style>
