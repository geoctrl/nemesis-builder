<script>
  export default {
    props: {
      name: String,
      image: String,
      active: Boolean,
      draggable: Boolean,
      indent: Number,
    },
  }
</script>

<template>
  <div class="select-item">
    {{name}}
  </div>
</template>

<style scoped lang="scss">
  .select-item {

  }
</style>