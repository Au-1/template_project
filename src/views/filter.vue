<template>
  <div class="container">
    <div class="pic"></div>
    <div class="text">
      <p>快乐吧</p>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
.container {
  position: relative;
}
.pic {
  height: 100%;
  width: 100%;
  position: relative;
  background: url("https://cdn.pixabay.com/photo/2021/09/07/11/53/car-6603726_960_720.jpg")
    no-repeat;
  background-size: cover;
  animation: fade-away 2.5s linear forwards;
}
.text {
  position: absolute;
  line-height: 55px;
  color: #fff;
  font-size: 36px;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: show 2s cubic-bezier(0.74, -0.1, 0.86, 0.83) forwards;
}

@keyframes fade-away {
  30% {
    filter: brightness(1);
  }
  100% {
    filter: brightness(0);
  }
}
@keyframes show {
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>