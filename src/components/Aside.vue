<template>
  <div class="aside">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item index="1-1">文章列表</el-menu-item>
        <el-menu-item index="1-2">发布文章</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
/deep/.el-submenu__title {
  // width: 200px !important;

  background: #1ca8ee !important;
  i {
    color: #f4f4f4 !important;
  }
}
.el-menu-item {
  background: #1ca8ee !important;
}

.el-menu {
  border: none;
}
</style>