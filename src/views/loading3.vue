<template>
  <div class="container">
    <div class="loader">
      <span v-for="e of 'LOADING'">{{ e }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2b2b2b;
}

.loader {
  height: 40px;
}

.loader span {
  font-family: arial;
  font-size: 24px;

  display: inline-block;
  transition: all 0.7s; /*总共需要.5s完成*/
  animation: animate 2s infinite; /*为名为animate的@keyframes动画在2秒内完成，动画永远播放*/
}

.loader span:nth-child(1) {
  /*span的父级元素的第一个孩子*/
  animation-delay: 0.1s; /*延迟.1s完成*/
}

.loader span:nth-child(2) {
  animation-delay: 0.2s;
}

.loader span:nth-child(3) {
  animation-delay: 0.3s;
}

.loader span:nth-child(4) {
  animation-delay: 0.4s;
}

.loader span:nth-child(5) {
  animation-delay: 0.5s;
}

.loader span:nth-child(6) {
  animation-delay: 0.6s;
}

.loader span:nth-child(7) {
  animation-delay: 0.7s;
}

@keyframes animate {
  /*定义一个名为animate的动画*/
  0% {
    color: rgba(255, 255, 255, 0.1);
    transform: translateY(0);
    margin-left: 0;
  }
  25% {
    color: rgba(255, 255, 0.1);
    transform: translateY(-15px);
    margin-left: 10px;
    text-shadow: 0 15px 5px rgba(0, 0, 0, 1); /*参数1：水平阴影 2：垂直阴影 3：模糊距离 4：颜色*/
  }
  100% {
    color: rgba(255, 255, 255, 0.1);
    transform: translateY(0);
  }
}
</style>