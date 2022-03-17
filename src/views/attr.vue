<template>
  <div class="container">
    <h1 class="玩转" data-name="CSS"></h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
h1::before {
  content: attr(class);
}
h1::after {
  content: attr(data-name);
}
</style>