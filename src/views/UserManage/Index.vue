<template>
  <div class="user-list">
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small" @click="editUser(false)">添加</el-button>
      <div style="float: right">
        <el-input placeholder="请输入用户昵称！" size="small" style="width: 140px" v-model="params.name" @clear="searchUser" clearable>
        </el-input>
        <el-button @click="searchUser" type="success" icon="el-icon-search" size="small"></el-button>
      </div>
    </ToolBar>
    <el-table :data="usersData" border ref="table" style="width: 100%">
      <el-table-column prop="loginname" label="登录账号">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="cellphone" label="手机">
      </el-table-column>
      <el-table-column prop="result" label="用户体质">
        <div slot-scope="scope" style="width: 100%;text-align: center">{{ scope.row.result ? $Config.tizhiCategories[scope.row.result]:'未判定' }}
        </div>
      </el-table-column>
      <el-table-column prop="sex" width="66" label="性别">
        <div slot-scope="scope" style="width: 100%;text-align: center">{{ $Config.sex[scope.row.sex] }}</div>
      </el-table-column>
      <el-table-column prop="active" width="100" label="是否激活">
        <div slot-scope="scope" style="width: 100%;text-align: center">
          <el-tag v-if="scope.row.active">正常</el-tag>
          <el-tag v-else type="danger">被删除</el-tag>
        </div>
      </el-table-column>
      <el-table-column label="操作" :render-header="tableAction" width="180">
        <template slot-scope="scope">
          <el-button @click="resetting(scope.row.id)" type="warning" style="transition: .4s;" :ref="scope.row.id" icon="el-icon-refresh" size="small" circle></el-button>
          <el-button @click="editUser(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
          <el-button @click="deleteUser(scope.row.id)" v-if="scope.row.active != '0'" type="danger" icon="el-icon-delete" circle size="small"></el-button>
          <el-button @click="deleteUser(scope.row.id)" v-else icon="el-icon-check" circle size="small"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script src="./Index.ts"></script>
<style src="./Index.css"></style>

