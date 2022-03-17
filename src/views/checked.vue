<template>
  <div class="container">
    <input class="switch" type="checkbox" />
  </div>
</template> 

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  border-radius: 31px;
  width: 102px;
  height: 62px;
  background-color: #e9e9eb;
}

.switch {
  position: relative;
  appearance: none;
  cursor: pointer;
  @extend .btn;
  transition: all 100ms;

  &::before {
    position: absolute;
    content: "";
    transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
    @extend .btn;
  }

  &::after {
    position: absolute;
    left: 4px;
    top: 4px;
    border-radius: 27px;
    width: 54px;
    height: 54px;
    background-color: #fff;
    content: "";
    box-shadow: 1px 1px 5px rgba(#000, 0.3);
    transition: all 300ms cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }

  &:checked {
    background-color: #5eb662;
    &::before {
      transform: scale(0);
    }

     &::after {
      transform: translateX(40px);
    }
  } 
} 
</style>