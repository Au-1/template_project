<template>
  <div class="container">
    <div class="heart"></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3e0000;
}

.heart {
  width: 180px;
  height: 100px;
  position: relative;
  background: #ff3e3e;
  transition: 1s;
  transform-origin: right bottom;
}
.heart:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  transition: 2s;
  transform-origin: right bottom;
}
.heart:hover {
  transform: rotate(45deg);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.heart:hover:before {
  background: #ff3e3e;
  transform: rotate(450deg) translateY(100px);
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
</style>