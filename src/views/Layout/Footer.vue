<template>
  <div class="footer">
    <div class="version">
      <b>Version</b> {{ $Config.version }}
      <a :href="$Config.gitHub" target="_blank">
        <i class="fa fa-github github"></i>
      </a>
    </div>
    <strong>Copyright &copy; 2014-2016
      <a href="javascript:;">{{ $Config.siteName }}</a>.</strong> All rights reserved.
  </div>
</template>

<script src="./Footer.ts"></script>
<style src="./Footer.css"></style>
