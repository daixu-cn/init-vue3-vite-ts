<template>
  <div id="index">
    <h1>
      <a href="https://blog.daixu.cn/" target="_blank"
        >daixu博客地址: https://blog.daixu.cn/</a
      >
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
#index {
  h1 {
    margin: 0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    a {
      color: $main-color;
    }
  }
}
</style>
