<template>
    <el-tree
        :data="data"
        :expand-on-click-node="true"
        class="project-tree"
        highlight-current=true
        default-expand-all=true 
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
      "label": "美国",
      "className": "fold",
      "children": [
          {
          "id": 11,
          "label": "121.1.23.1",
          "className": "pc",
          "className2": "edit",
          },
          {
          "id": 12,
          "label": "100.230.121.1",
          "className": "pc",
          "className2": "edit",
          }
        ]
     },
     {
      "id": 1,
      "label": "日本",
      "className": "fold",
      "children": [
          {
          "id": 11,
          "label": "121.1.23.1",
          "className": "pc",
          "className2": "edit",
          },
          {
          "id": 11,
          "label": "100.230.121.1",
          "className": "pc",
          "className2": "edit",
          }
        ]
     }
 ]//           <svg-icon iconClass="cmd"></svg-icon>
        }
        },
    methods: {
        renderContent(h, { node, data, store }) {
        if(data.children){    
            return (
              <span class="custom-tree-node">
                <svg-icon iconClass={data.className}></svg-icon>
                <span style="margin-left:5px;">{node.label}</span>
              </span>
              );
          }
        
        else{
            return (
              <span class="custom-tree-node">
                <span style="margin-left:5px;margin-right:7px;">{node.label}</span>
                <svg-icon iconClass={data.className} style="margin-right:7px;"></svg-icon>
                <svg-icon iconClass={data.className2}></svg-icon>
              </span>
              );
        }
        }
        
  }
}
</script>
<style>
.el-tree {
    background-color: #ffffff;;
    color: #ffffff;
  }
</style>