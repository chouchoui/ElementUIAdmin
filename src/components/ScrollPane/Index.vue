<!--https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/ScrollPane/index.vue-->
<template>

  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">

    <div class="scroll-wrapper" ref="scrollWrapper" :style="{left: left + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./Index.ts"></script>

<style src="./Index.css" scoped></style>