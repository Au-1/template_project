<template>
  <div class="container">
    <form action class="calculator" name="calc">
      <input class="value" type="text" readonly v-model="display" />
      <span
        v-for="(e,i) of operationValue"
        :class="{ num: true, plus: e == '+', equal: e == '=', clear: e == 'c' }"
        :key="e + i"
        @click="operation"
      >{{ e }}</span>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const display = ref('');

let operationValue = Object.freeze(['c', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '3', '2', '1', '0', '00', '.', '=']);
operationValue = reactive(operationValue);

function operation(e) {
  switch (e.target.innerHTML) {
    case '=':
      try {
        display.value = eval(display.value);
      } catch (error) { }
      break;
    case 'c':
      display.value = '';
      break;
    default:
      display.value += e.target.innerHTML;
  }
}

</script>

<style  scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  background: #091921;
}
.calculator {
  position: relative;
  display: grid;
}
.calculator .value {
  grid-column: span 4;
  height: 100px;
  text-align: right;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 18px;
}
.calculator span {
  display: grid;
  width: 60px;
  height: 60px;
  color: #fff;
  background: #0c2835;
  place-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.calculator span:active {
  background: #74ff3b;
  color: #111;
}
.calculator span.clear {
  grid-column: span 2;
  width: 120px;
  background: #ff3077;
}
.calculator span.plus {
  grid-row: span 2;
  height: 120px;
}
.calculator span.equal {
  background: #03b1ff;
}
</style>