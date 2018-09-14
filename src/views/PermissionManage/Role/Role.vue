<template>
  <div class="role-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="editRole(false)">添加</el-button>
      <div style="float: right">
        <el-input placeholder="请输入角色名称！" size="small" style="width: 140px" v-model="params.name" @clear="searchRole" clearable>
        </el-input>
        <el-button @click="searchRole" type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
    <el-table :data="roleData" border ref="table" style="width: 100%">
      <el-table-column prop="key" label="角色key">
      </el-table-column>
      <el-table-column prop="name" label="角色名称">
      </el-table-column>
      <el-table-column prop="description" label="描述">
      </el-table-column>
      <el-table-column label="操作" :render-header="tableAction" width="120">
        <template slot-scope="scope">
          <el-button @click="editRole(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
          <el-button @click="currentEditPermissions = scope.row" type="success" icon="el-icon-setting" size="small" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <RoleEdit :title="roleEditTitle" :dialogFormVisible="dialogFormVisible" :data="currentEditRole" @val-change="roleEditChange" @cancel="dialogFormVisible = false">
    </RoleEdit>
    <PermissionsEdit :role="currentEditPermissions" @success="currentEditPermissions = false;" @cancel="currentEditPermissions = false;"></PermissionsEdit>
  </div>
</template>

<script src="./Role.ts"></script>
<style src="./Role.css"></style>
