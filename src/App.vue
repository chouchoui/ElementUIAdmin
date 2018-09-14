<template>
  <div id="app">
    <router-view name="blank"></router-view>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'app',
});
</script>

<style lang="less">
#app {
  background-color: #222d32;
}
</style>
