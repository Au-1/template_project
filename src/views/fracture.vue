<template>
    <div class="container">
        <div class="normal"></div>
        <div class="two"></div>
    </div>
</template> 

<style lang="scss" scoped>
@import "@/assets/style/triangle-function.scss";

@mixin folded-corner($background, $size, $angle: 30deg) {
    position: relative;
    background: $background; /* 回退样式 */
    background: linear-gradient($angle - 180deg, transparent $size, $background 0);
    border-radius: 0.5em;

    $x: $size / sin($angle);
    $y: $size / cos($angle);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient( to left bottom, transparent 50%, rgba(0, 0, 0, 0.2) 0, rgba(0, 0, 0, 0.4)) 100% 0 no-repeat;
        width: $y;
        height: $x;
        transform: translateY($y - $x) rotate(2 * $angle - 90deg);
        transform-origin: bottom right;
        border-bottom-left-radius: inherit;
        box-shadow: -0.2em 0.2em 0.3em -0.1em rgba(0, 0, 0, 0.2);
    }
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > div {
        width: 300px;
        height: 200px; 
    }
 
    & > .normal {
        @include folded-corner(#58a, 2em, 30deg);
    }
 
    & > .two {
        @include folded-corner(#58a, 2em, 70deg);
    }
}
</style>