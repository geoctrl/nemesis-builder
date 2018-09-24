<template>
  <div class="pane-header">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .pane-header {
    padding: 10px;
    color: #fff;
    font-size: 14px;
    background-color: $color-grey-800;
    border-bottom: solid 1px $color-grey-925;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: rgba(#fff, .1);
    }
  }
</style>