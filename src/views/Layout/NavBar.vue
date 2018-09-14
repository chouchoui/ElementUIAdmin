<template>
  <nav class="nav-bar">
    <ScrollPane class="nav-bar-scroll">
      <router-link :to="v.path" class="nav-bar-tag" v-for="(v,i) in nav" :key="i.path" :class="$route.path == v.path ? ' active':''">
        <i class="point"></i>
        {{ v.title }}
        <div v-show="nav.length != 1" class="close-box">
          <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(i)'></span>
        </div>
      </router-link>
    </ScrollPane>
  </nav>
</template>
<script src="./NavBar.ts"></script>
<style src="./NavBar.css" scoped></style>
