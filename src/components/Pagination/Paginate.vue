<!--
如何使用？
1.导入并添加components, import ToolBar from '~/components/ToolBar/ToolBar.vue',
2.绑定你的api、参数和数据处理函数，会自动生成分页
<Paginate
    api="postList"
    :params="params"
    :refresh="refresh"
    @val-change="PaginateData"
    >
</Paginate>
3.当你再次改动参数时，执行 refresh=!refresh 即可刷新。用于搜索。

-->

<template>
  <div class="pagination">
    <div class="total">共{{total}}条数据,当页有{{currentDataLength}}条数据。</div>
    <el-pagination background layout="prev, pager, next" :page-size="$Config.pageSize" @current-change="change" :total="total">
    </el-pagination>
  </div>
</template>

<script src="./Paginate.ts"></script>

<style src="./Paginate.css" scoped></style>