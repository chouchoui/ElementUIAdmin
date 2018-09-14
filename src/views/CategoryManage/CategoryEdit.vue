<template>
    <div class="category-dialog">
        <el-dialog :title="title" :visible="dialogFormVisible" :show-close="false" width="45%">
            <el-form :model="form">
                <el-form-item label="分类名称">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="分类描述">
                    <el-input v-model="form.comment" type="textarea" :rows="3" placeholder="请输入备注说明"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="$emit('cancel');">取 消</el-button>
                <el-button type="primary" :loading="btnLoading" @click="btnOk">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script src="./CategoryEdit.ts"></script>
<style src="./CategoryEdit.css"></style>
