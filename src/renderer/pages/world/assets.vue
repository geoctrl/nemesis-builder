<script>
  import PaneHeader from './pane-header';
  export default {
    components: { PaneHeader },
  }
</script>

<template>
  <div class="assets">
    <pane-header>Assets</pane-header>
    <div class="world-hierarchy__list">
      <select-list
        :list="[
        { image: '', name: 'Image 1', options: [] },
        { image: '', name: 'Image 2', options: [] },
        { image: '', name: 'Image 3', options: [] },
      ]"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .assets {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .assets__list {
    overflow: auto;
  }

</style>