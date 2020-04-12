<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
// 公共样式

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  color: inherit;
}

ul {
  list-style: none;
}
i,
em {
  font-style: normal;
}
</style>
<script>