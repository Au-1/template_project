<template>
  <div class="container">
    <div class="text">
      <span v-for="(e,i) of 'IRSHAD'" :key="e">{{ e }}</span>
      <div style="clear:both"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff90b3;
}
.text {
  text-align: center;
  display: inline-block;
  transition: 0.5s;
}

.text span {
  background: #fff;
  width: 120px;
  height: 120px;
  display: block;
  line-height: 120px;
  font-family: arial;
  font-weight: bold;
  color: #a0a0a0;
  font-size: 40px;
  float: left;
  transition: 0.5s;
}
.text:hover span:nth-child(1) {
  border-radius: 3px; /*边框的圆角半径设为3px*/
}

.text:hover span:nth-child(odd) {
  /*span父元素的子元素的奇数行*/
  transform: skewY(-15deg); /*Y 轴的 2D 倾斜转换:y轴左下倾斜15度 ，面积不变*/
  color: #b5b5b5;
  box-shadow: 0 60px 20px rgba(0, 0, 0, 0.1);
}

.text:hover span:nth-child(even) {
  /*span父元素的子元素的偶数行*/
  transform: skewY(15deg);
  color: #b5b5b5;
  box-shadow: 0 60px 20px rgba(0, 0, 0, 0.1),
    inset 0px 0 30px rgba(0, 0, 0, 0.2);
}

.text:hover {
  transform: rotateX(35deg); /*沿着X轴35度3D旋转*/
}
</style>