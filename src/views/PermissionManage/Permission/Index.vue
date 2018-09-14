<template>
  <div>
    <ToolBar>

      <div style="float: right">
        <el-input placeholder="搜索权限" size="small" style="width: 140px" v-model="searchName" clearable>
        </el-input>
      </div>
    </ToolBar>
    <el-table :data="tableData3" border ref="permissionsList" style="width: 100%">
      <el-table-column prop="name" label="权限KEY">
      </el-table-column>
      <el-table-column prop="display_name" label="权限名称">
      </el-table-column>
      <el-table-column prop="description" label="权限描述">
        <div slot-scope="scope">
          {{ scope.row.description ? scope.row.description : '暂无描述' }}
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./Index.ts"></script>
<style src="./Index.css"></style>