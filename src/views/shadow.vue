<template>
  <div class="container">
    <h1>3D TEXT</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #90a7ff;
}
h1 {
  margin: 250px auto;
  text-align: center;
  font-size: 10em;
  color: #fff;
  font-family: arial;
  font-weight: bold;
  transition: 0.5s;
}
h1:hover {
  text-shadow: 0 1px 0 #ccc, 0 1px 15px rgba(0, 0, 0, 0.2), 0 2px 0 #ccc,
    0 3px 0 #ccc, 0 4px 0 #ccc, 0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc,
    0 8px 0 #ccc, 0 9px 0 #ccc, 0 10px 0 #ccc, 0 11px 0 #ccc, 0 12px 0 #ccc,
    0 20px 30px rgba(0, 0, 0, 0.5);
}
</style>