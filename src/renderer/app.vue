<script>
  import TitleBar from './components/title-bar';
  export default {
    components: { TitleBar },
    name: 'nemesis-editor'
  }
</script>

<template>
  <div id="app">
    <title-bar />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
</style>