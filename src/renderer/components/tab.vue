<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: () => true,
      }
    }
  }
</script>

<template>
  <div class="tab" :class="active ? 'tab--active' : ''">
    Scene 4
  </div>
</template>

<style scoped lang="scss">
  .tab {
    display: flex;
    padding: 0 14px;
    align-items: center;
    font-size: 14px;
    border-bottom-left-radius: $base-border-radius;
    border-bottom-right-radius: $base-border-radius;

    &:hover {
      background-color: transparent;
    }

    &.tab--active {
      background-color: $color-primary-500;
    }
  }
</style>