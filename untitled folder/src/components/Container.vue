<template>
  <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="250px"><Tree /></el-aside>
    <el-main>
      <vue-command></vue-command>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import VueCommand from './VueCommand.vue'
import Tree from './Tree.vue'

export default {
  name: 'app',
  components: {
    VueCommand,
    Tree
  }
}
</script>

<style>
.el-header, .el-footer {
    background-color: #2c2c2c;
    color: #2c2c2c;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #515151;
    color: #515151;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #ffffff;;
    color: #ffffff;
    text-align: center;
  }
</style>
