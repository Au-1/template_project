<template>
    <div class="container">
        <ul class="list">
            <li v-for="v in 10" :key="v">Data{{ v }}</li>
        </ul>
        <ul class="list"></ul>
    </div>
</template>
<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.list {
    height: 150px;
    width: 200px;

    overflow: auto;
    outline: 1px solid #3c9;

    &:empty {
        display: flex;
        justify-content: center;
        align-items: center;

        &::before {
            content: "no data, no way";
            font-weight: 600;
        }
    }

    & + .list {
        margin-left: 50px;
    }
}

.list > li {
    padding: 0 10px;
    height: 30px;
    background-color: #09f;
    line-height: 30px;
    color: #fff;
    &:nth-child(even) {
        background-color: #f90;
    }
}
</style>