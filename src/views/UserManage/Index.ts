import { Component, Vue } from 'vue-property-decorator';

import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';
import { ElTable } from 'element-ui/types/table';

@Component({
    components: {
        ToolBar,
        HelpHint,
    },
})
export default class UserManage extends Vue {
    params = {
        name: '',
    };
    usersData = [
        {
            id: 1,
            loginname: 'Admin',
            nickname: '管理员',
            email:
                'Admin@.admin.com',
            cellphone:
                '151178xxxx',
            sex: 'male',
            active: 1,
        },
        {
            id: 2,
            loginname:
                'SenLin',
            nickname: '森林',
            email: 'SenLin@.admin.com',
            cellphone: '151178xxxx',
            sex: 'unknown',
            active: 0,
        },
        {
            id: 4,
            loginname: 'Admin1',
            nickname: '赵晓',
            email: 'Admin@.admin.com',
            cellphone: '151178xxxx',
            sex: 'male',
            active: 1,
        },
        {
            id: 5,
            loginname: 'Wujun',
            nickname: '吴军',
            email: 'Admin@.admin.com',
            cellphone: '151178xxxx',
            sex: 'male',
            active: 1,
        },
        {
            id: 5,
            loginname: 'Huang',
            nickname: '黄家',
            email: 'Admin@.admin.com',
            cellphone: '151178xxxx',
            sex: 'male',
            active: 1,
        },
    ];

    searchUser() {
        let tableRow: NodeListOf<HTMLElement> = (this.$refs.table as ElTable).$el.querySelectorAll('tbody tr');
        let tableRowHeight = tableRow[1].offsetHeight;
        let isjump = false;
        for (let i = 0; i < this.usersData.length; i++) {
            if (this.params.name
                && this.usersData[i].nickname.indexOf(this.params.name)
                !== -1) {
                tableRow[i].style.backgroundColor = '#85ce61';
                if (!isjump) {
                    scrollTo(0, i * tableRowHeight + 66); isjump = true;
                }
            } else {
                tableRow[i].style.backgroundColor = '#fff';
            }
        }
    }
    tableAction() {
        return this.$createElement('HelpHint', {
            props: {
                content: '重置密码为123456 / 编辑用户 / 删除或恢复用户',
            },
        }, '操作');
    }
    editUser(data) {

    }
    UploadUser(data) {

    }
    deleteUser(id) {

        this.$message({
            message: '这里请求api删除或者恢复用户之后刷新分页组件，列表自动更新',
            type: 'success',
        });

    }
    resetting(id) {

        let dom = (this.$refs[id] as Vue).$el;
        dom.style.transform = 'rotate(180deg)';
        setTimeout(() => { dom.style.transform = 'rotate(0deg)'; }, 600);
        this.$message({
            message: '已经成功重置密码',
            type: 'success',
        });

    }
}
