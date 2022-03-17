<template>
    <div class="container">
        <div class="box">CSS</div>
        <div class="box2">Glow</div>
        <div class="box3">CSS3d</div>
    </div>
</template> 

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
        width: 250px;
        height: 135px;
        text-align: center;
        line-height: 135px;
        font-size: 4em;
    }
}

.box {
    background-color: hotpink;
    color: white;
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
}

.box2 {
    background-color: #203;
    color: #ffc;
    text-shadow: 0 0 0.1em, 0 0 0.3em;
    transition: 1s;

    &:hover {
        color: transparent;
        text-shadow: 0 0 0.1em white, 0 0 0.3em white;
        // filter: blur(.1em);
    }
}

.box3 {
    background: #58a;
    color: white;
    text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
        0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%);
}
</style>