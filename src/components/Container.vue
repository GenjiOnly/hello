<template>
  <div id="app">
  <el-container>
  <el-header>
      head
  </el-header>
  <el-container>
    <el-aside width="200px">
        <Tree></Tree>
    </el-aside>
    <el-main>
      <vue-command />
    </el-main>
  </el-container>
  </el-container>
  </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
