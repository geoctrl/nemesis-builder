<script>
  import PaneHeader from './pane-header';
  export default {
    components: { PaneHeader },
  }
</script>

<template>
  <div class="world-hierarchy">
    <pane-header>World Hierarchy</pane-header>
    <div class="world-hierarchy__list">
      <select-item
        name="Hero"
        image=""
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .world-hierarchy {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .world-hierarchy__list {
    overflow: auto;
  }

</style>