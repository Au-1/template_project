<template>
  <div class="container">
    <div class="loader">
      <span v-for="e in 7"></span>
      <h1>Loading</h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #10135a;
}
.loader {
  height: 40px; 
}
.loader span {
  height: 15px;
  width: 15px;
  display: inline-block;
  border-radius: 50%;
  transition: all 0.5s;
  animation: animate 2s infinite;
}
.loader span:nth-child(1) {
  animation-delay: 0;
}
.loader span:nth-child(2) {
  animation-delay: 0.1s;
}
.loader span:nth-child(3) {
  animation-delay: 0.2s;
}
.loader span:nth-child(4) {
  animation-delay: 0.3s;
}
.loader span:nth-child(5) {
  animation-delay: 0.4s;
}
.loader span:nth-child(6) {
  animation-delay: 0.5s;
}
.loader span:nth-child(7) {
  animation-delay: 0.6s;
}
.loader h1 {
  font-family: arial;
  color: #fff;
  margin: 0;
  padding: 0;
  letter-spacing: 8px;
}
@keyframes animate {
  0% {
    border: 1px solid #fff;
    background: transparent;
    transform: translateY(0);
  }
  50% {
    border: 1px solid #fff;
    background: red;
    transform: translateY(-25px);
  }
  100% {
    border: 1px solid #fff;
    background: yellow;
    transform: translateY(0);
  }
}
</style>