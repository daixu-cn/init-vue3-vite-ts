<template>
  <div id="notFound">
    <h1>404</h1>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
</script>

<style lang="scss">
#notFound {
  h1 {
    margin: 0;
    font-size: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $main-color;
  }
}
</style>
