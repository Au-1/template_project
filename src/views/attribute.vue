<template>
  <div class="container">
    <ul class="strip-loading">
      <li v-for="v in 6" :key="v" :style="`--line-index: ${v}`"></li>
    </ul>
  </div>
</template> 

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.strip-loading {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.strip-loading > li {
  --time: calc((var(--line-index) - 1) * 200ms);
  list-style: none;
  border-radius: 3px;
  width: 6px;
  height: 30px;
  background-color: #f66;
  animation: beat 1.5s ease-in-out var(--time) infinite;
}

.strip-loading > li + li {
  margin-left: 5px;
}

@keyframes beat {
  0%,
  100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.5);
  }
}
</style>
