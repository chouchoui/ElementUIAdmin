<template>
  <div class="category">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="addCategory(false)">添加</el-button>
    </ToolBar>
    <el-tree :indent="38" :props="props" :data="data" @node-click="handleNodeClick" :render-content="renderContent">
    </el-tree>
    <CategoryEdit :title="categoryEditTitle" :dialogFormVisible="dialogFormVisible" :data="currentEditCategory" :departTree="data" @val-change="categoryEditChange" @cancel="dialogFormVisible = false">
    </CategoryEdit>
  </div>
</template>

<script src="./Index.ts"></script>
<style src="./Index.css"></style>
