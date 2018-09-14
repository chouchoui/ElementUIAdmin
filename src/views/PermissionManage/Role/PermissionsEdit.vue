<template>
  <div class="role-dialog">
    <el-dialog :title="'编辑“'+role.name+'”的权限'" :visible="dialogFormVisible" :show-close="false">
      <el-table :data="allPermissions" border height="500" ref="permissionsTable" @selection-change="changeFun" style="width: 100%">
        <el-table-column type="selection" width="35">
        </el-table-column>
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
      <div slot="footer" class="dialog-footer">
        <div style="float: left">
          <el-input placeholder="搜索权限名称" v-model="searchPermissionsDisplayName" clearable>
          </el-input>
        </div>
        <el-button @click="dialogFormVisible = false,$emit('cancel');">取 消</el-button>
        <el-button type="primary" :loading="btnLoading" @click="btnOk">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script src="./PermissionsEdit.ts"></script>
<style src="./PermissionsEdit.css"></style>


