<script>
  export default {
    props: {
      list: Array,
    },
  }
</script>

<template>
  <ul class="list">
    <li class="list-item" v-for="item in list">
      <div class="list-item__image" v-if="item.image"></div>
      <div>
        {{item.name}}
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
  .list {
    margin: 0;
    padding: 0;

    > .list-item {
      padding: 10px 10px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:focus {
        background-color: rgba(#fff, .1);
      }

      &:last-child {
        border-bottom: none;
      }
    }

    .list-item__image {
      width: 24px;
      height: 24px;
      border: solid 1px $color-grey-950;
      border-radius: 3px;
      margin-right: 10px;
    }
  }
</style>