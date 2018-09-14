<template>
  <div>
    <ToolBar>
      <el-button type="primary" icon="el-icon-plus" size="small">添加</el-button>
      <div style="float: right">
        <el-input placeholder="搜索标题" size="small" style="width: 140px" v-model="searchParams.postTitle" clearable>
        </el-input>
        <el-select v-model="searchParams.postType" size="small" clearable placeholder="请选择分类" style="width: 140px">
          <el-option v-for="(v,k) in $Config.postType" :key="k" :label="v" :value="k">
          </el-option>
        </el-select>

        <el-select v-model="searchParams.postStatus" size="small" clearable placeholder="请选择状态" style="width: 120px">
          <el-option v-for="(v,k) in $Config.postStatus" :key="k" :label="v" :value="k">
          </el-option>
        </el-select>
        <el-button type="success" icon="el-icon-search" size="small" @click="refresh = !refresh"></el-button>
      </div>
    </ToolBar>
    <el-table :data="tableData3" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="标题" width="180">
      </el-table-column>
      <el-table-column prop="address" label="摘要">
      </el-table-column>
      <el-table-column label="操作" :render-header="tableAction" width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" icon="el-icon-info" size="small" circle></el-button>
          <el-button @click="handleClick(scope.row)" type="primary" icon="el-icon-edit" size="small" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script src="./Index.ts"></script>
<style src="./Index.css"></style>