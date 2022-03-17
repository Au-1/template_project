<template>
  <div class="container">
    <ul>
      <li v-for="(e, i) of 'TUTORIAL'" :key="e + i">{{ e }}</li>
      <div style="clear: both;"></div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff008b;
}

ul {
  padding: 0;
  margin: 0;
  border: 10px solid #fff;
  display: inline-block; /*使元素可以设置宽高，边距等，不会独占一行（行内元素不能设置宽高等），
            缺点是元素间会有4px的间隙，消除方法是设置font-size：0；*/
}

ul li {
  list-style: none;
  color: #fff;
  float: left;
  font-size: 5em;
  font-family: "arial";
  transition: 0.9s; /*总共需要延迟0.9秒完成*/
}

ul:hover li {
  transform: rotateY(360deg); /* 沿着y轴360度3D旋转 */
}

ul:hover li:nth-child(1) {
  /* li的父级元素的第一个孩子*/
  transition-delay: 0.9s; /* 鼠标覆盖上后延迟0.9秒后执行*/
}

ul:hover li:nth-child(2) {
  transition-delay: 0.6s;
}

ul:hover li:nth-child(3) {
  transition-delay: 0.3s;
}
</style>