<template>
  <div class="tree-details">
    <el-row type="flex">
      <el-col style="flex: 1">
        <span style="font-size: 13px">
          <span style="color: #3c8dbc">【</span>{{ data.data.name }}
          <span style="color: #3c8dbc">】</span>
          <!--<el-tag size="mini">{{data.childNodes.length}}</el-tag>-->
        </span>
      </el-col>
      <el-col style="width: 180px">
        <el-button @click="info(data,$event)" type="info" icon="el-icon-tickets" circle size="mini"></el-button>
        <el-button @click="edit(data,$event)" type="primary" icon="el-icon-edit" circle size="mini"></el-button>
        <el-button @click="add(data,$event)" type="success" icon="el-icon-plus" circle size="mini"></el-button>
        <el-button @click="deleteDepart(data.data.id,$event)" type="danger" icon="el-icon-delete" circle size="mini"></el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script src="./TreeDetails.ts"></script>
<style src="./TreeDetails.css"></style>