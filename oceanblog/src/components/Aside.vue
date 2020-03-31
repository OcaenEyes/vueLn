<template>
  <div class="aside">
    <el-menu
      background-color="#000"
      text-color="#fff"
      default-active="1-1"
      active-text-color="#ffd04b"
      :default-openeds="['1','1','2']"
      @select="handleSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>博客管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="1-1">文章管理</el-menu-item>
          <el-menu-item index="1-2">标签管理</el-menu-item>
          <el-menu-item index="1-3">类型管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统管理</span>
        </template>

        <el-menu-item-group>
          <el-menu-item index="2-1">角色管理</el-menu-item>
          <el-menu-item index="2-2">用户管理</el-menu-item>
          <el-menu-item index="2-3">权限管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelect(key) {
      switch (key) {
        case "1-1":
          this.$router.push("/admin/articlemanager");
          break;
        case "1-2":
          this.$router.push("/admin/articletagmanager");
          break;
        case "1-3":
          this.$router.push("/admin/articletypemanager");
          break;
      }
    }
  }
};
</script>

<style scoped>
.el-menu .el-submenu .el-menu-item {
  min-width: 199px;
  max-width: 199px;
}
</style>