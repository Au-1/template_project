<template>
  <div class="container">
      <div class="hexagon">
        <span v-for="e in 6"></span> 
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #262626;
}

.hexagon {
  width: 190px;
  height: 109px;
  background: #fff; 
  position: relative;
}
.hexagon:before,
.hexagon:after {
  content: "";
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
}
.hexagon:before {
  transform: rotate(60deg);
}
.hexagon:after {
  transform: rotate(-60deg);
}
.hexagon,
.hexagon:before,
.hexagon:after {
  background: transparent;
  border: 1px solid #fff;
  background: rgba(48, 141, 255, 0.5);
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
}
span {
  position: absolute;
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  z-index: 2;
}
span:nth-child(1) {
  top: -4px;
  left: -4px;
}
span:nth-child(2) {
  top: -4px;
  right: -4px;
}
span:nth-child(3) {
  bottom: -4px;
  left: -4px;
}
span:nth-child(4) {
  bottom: -4px;
  right: -4px;
}
span:nth-child(5) {
  bottom: -60px;
  left: calc(50% - 4px);
}
span:nth-child(6) {
  top: -60px;
  left: calc(50% - 4px);
}
</style>