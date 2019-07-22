<template>
    <el-tree
        :data="data"
        :expand-on-click-node="true"
        class="project-tree"
        unselectable="on"
        :render-content="renderContent"
    ></el-tree>
</template>
<script>
export default{
    data(){
        return { 
        data: [
      {
      "id": 1,
      "label": "haha",
      "className": "first-level",
      "children": [
          {
          "id": 11,
          "label": "hehe",
          "className": "el-icon-folder-opened",
          "children": [
                  {
                      "id": 111,
                      "className": "el-icon-folder-opened",
                      "label": "heihei"
                  }
              ]
          }
        ]
     }
 ]
        }
        },
    methods: {
        renderContent(h, { node, data, store }) {
            return (
              <span class="custom-tree-node">
                <i class={data.className}></i>
                <span style="margin-left:5px;">{node.label}</span>
              </span>
              );
          }
  }
}
</script>
<style>
</style>