<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
          <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <!-- 用户管理子菜单 -->
        <el-menu-item index="">
        <i class="el-icon-menu"></i>
        <span slot="title">添加用户</span>
        </el-menu-item>
        <el-menu-item index="editPassword">
          <i class="el-icon-menu"></i>
          <span slot="title">修改密码</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="customer">
        <i class="el-icon-menu"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="anas">
        <i class="el-icon-setting"></i>
        <span slot="title">数据分析</span>
      </el-menu-item>
      <el-menu-item index="location">
        <i class="el-icon-setting"></i>
        <span slot="title">地图位置</span>
      </el-menu-item>
    </el-menu>
      </el-aside>
    <el-main>
      <router-view />
    </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home'

}
</script>
<style lang="less" scoped>
.home{
  height: 100%;
}
.el-container{
  height: 100%;
  .el-aside{
    height: 100%;
    background-color: #545c64;
  }
}
</style>
