<template>
  <div class="container">
    <div class="box shadow1">Shadow 1</div>
    <div class="box shadow2">Shadow 2</div>
    <div class="box shadow3">Shadow 3</div>
    <div class="box shadow4">Shadow 4</div>
    <div class="box shadow5">Shadow 5</div>
    <div class="box shadow6">Shadow 6</div>
    <div class="box shadow7">Shadow 7</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2ec194;
  position: relative;
  height: 450vh !important;
}
.container .box {
  position: relative;
  width: 300px;
  height: 400px;
  flex: 0 0 400px;
  margin: 40px 0;
  background: #fff;
  font-family: consolas;
  font-size: 2.5em;

  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.1); 
}
.container .box.shadow1 {
  box-shadow: -30px 30px 20px rgba(0, 0, 0, .3);
}
.container .box.shadow2:before {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 10%;
  width: 90%;
  height: 50px;
  background: rgba(0, 0, 0, 0.3);
  transform-origin: left;
  transform: skewY(5deg);
  z-index: -1;
  filter: blur(5px);
}
.container .box.shadow3:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  transform-origin: right;
  transform: skewY(-8deg);
  z-index: -1;
  filter: blur(10px);
}
.container .box.shadow3:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 50%;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  transform-origin: left;
  transform: skewY(8deg);
  z-index: -1;
  filter: blur(10px);
}
.container .box.shadow4::before {
  content: "";
  position: absolute;
  bottom: -50px;
  left: 5%;
  width: 90%;
  height: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  z-index: -1; 
  filter: blur(10px);
}
.container .box.shadow5:before {
  content: "";
  position: absolute;
  bottom: -15%;
  left: 5%;
  width: 90%;
  height: 90%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
  filter: blur(10px);
}
.container .box.shadow6 {
  background: #2ec194;
  border-radius: 15px;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.1);
}
.container .box.shadow7 {
  background: #2ec194;
  border-radius: 15px;
  box-shadow: -15px -15px 15px rgba(255, 255, 255, 0.2),
    15px 15px 15px rgba(0, 0, 0, 0.1),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
    inset 5px 5px 5px rgba(0, 0, 0, 0.1);
}
</style>