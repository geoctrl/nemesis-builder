<script>
  import WorldHierarchy from './world-hierarchy';
  import Assets from './assets';
  export default {
    components: { WorldHierarchy, Assets },
    data() {
      return {
        rooms: [
          {

          },
        ],
      };
    },
    mounted() {
    }
  }
</script>

<template>
  <div class="world">
    <tab-container>
      <tab

      />
    </tab-container>

    <div class="world-bar">
      <div class="world-bar__item">
        <world-hierarchy />
      </div>
      <div class="world-bar__separator" />
      <div class="world-bar__item">
        <assets />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .world {
    background-color: $color-grey-700;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .world-bar {
    width: 300px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: $color-grey-900;
    border-left: solid 1px $color-grey-925;

    .world-bar__item {
      height: 100%;
      overflow: auto;
    }

    .world-bar__separator {
      height: 1px;
      flex-shrink: 0;
      background-color: $color-grey-925;
    }
  }
</style>