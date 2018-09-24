<script>
  export default {
    name: 'nemesis-editor'
  }
</script>

<template>
  <div id="app">
    <div class="title-bar"></div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    user-select: none;
    padding: 0;
    margin: 0;
  }
  .title-bar {
    -webkit-user-select: none;
    -webkit-app-region: drag;
    height: 23px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
</style>