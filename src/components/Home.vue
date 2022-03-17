<template>
  <div id="home">
    <div class="list">
      <div
        class="list-item"
        v-for="item of list"
        :key="item.name"
        @click="$router.push(item.path)"
        :title="item.name"
      >{{ item.name }}</div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const list = reactive(
  router.getRoutes()
    .find((item) => item.path == "/")
    ?.children
    .map((ele) => ({ path: ele.path, name: ele.meta.title }))
);
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  justify-content: space-around;
  align-items: center;

  height: 100vh;
  width: 100vw;
  background: center url("/wallhaven-l328mq.jpg") #fff;

  & > div {
    background-color: #fdfffe;
    border: 1px solid skyblue;
    border-radius: 5px;
    height: 95vh;
  }

  & .list {
    flex: 0 1 15vw;
    overflow: auto;
    font-size: 0.9rem;
    color: #2e4f85;
    letter-spacing: 2px;

    & > .list-item {
      width: 100%;
      height: 40px;

      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      line-height: 40px;
      border-left: 3px solid skyblue;
      margin-bottom: 2px;
      cursor: pointer;
      text-indent: 7px;

      &:hover {
        background-color: #f8f8fd;
      }
    }
  }

  & .view {
    display: flex;

    overflow: auto;
    flex: 0 1 79vw;

    & > .container {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
