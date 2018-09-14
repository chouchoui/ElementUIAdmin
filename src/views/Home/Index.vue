<template>
  <div>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>概况</span>
      </div>
      <div class="demo">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #673AB7">
                <i class="el-icon-location-outline index-icon"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #3c8dbc">
                <i class="el-icon-picture index-icon"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #009688">
                <i class="el-icon-service index-icon"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content ">
              <div style="padding: 10px;background: #607D8B">
                <i class="el-icon-bell index-icon"></i>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <br>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>Element ui组件</span>
      </div>

      <el-row>
        <el-col :span="14">
          <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions">
          </el-cascader>
          <el-date-picker v-model="dateVal" type="date" placeholder="选择日期">
          </el-date-picker>
          <el-input-number v-model="num" :min="1" :max="10" label="计数器max=10,min=1"></el-input-number>
          <div style="display: inline-block">
            <el-rate v-model="elRate" show-score :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
          </div>
          <div style="margin-left: 40px;display: inline-block">
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
          </div>
          <br><br><br>
          <div style="display: inline-block">
            <el-steps :active="2">
              <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
              <el-step title="步骤 3" description="这段就没那么长了"></el-step>
            </el-steps>
          </div>
          <el-pagination style="display: inline-block" background layout="prev, pager, next" :total="100">
          </el-pagination>
          <br><br><br>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>

        </el-col>
        <el-col :span="10">
          <div>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="success" icon="el-icon-check" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
            <el-button type="warning" icon="el-icon-star-off" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </div>
          <div style="margin-top: 40px">
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>

  </div>
</template>
<script src="./Index.ts"></script>
<style src="./Index.css"></style>