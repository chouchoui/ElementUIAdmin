import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import AllRouter from '@/router/';
import RoleEditVue from '@/views/PermissionManage/Role/RoleEdit.vue';
import { ElTable } from 'element-ui/types/table';

@Component({
    components: {
        RoleEditVue,
    },
})
export default class PermissionsEdit extends Vue {
    @Prop() role!: any;

    dialogFormVisible = false;
    btnLoading = false;
    allPermissions: any[] = [];
    searchPermissionsDisplayName = '';
    multipleSelection: any[] = [];

    @Watch('role', { deep: true })
    handlerRole() {
        let self = this;
        if (!self.role) { return; }
        self.dialogFormVisible = true;
    }
    @Watch('searchPermissionsDisplayName')
    handlerSearchPermissionsDisplayName() {
        this.searchPermissions();
    }

    changeFun(val) {
        this.multipleSelection = val;
    }
    searchPermissions() {
        let tableRow: NodeListOf<HTMLElement> = (this.$refs.permissionsTable as ElTable)
            .$el.querySelectorAll('tbody tr');
        let wrapperScrolling: HTMLElement = (this.$refs.permissionsTable as ElTable)
            .$el.getElementsByClassName('el-table__body-wrapper')[0] as HTMLElement;

        let tableRowHeight = tableRow[1].offsetHeight;
        let isjump = false;
        for (let i = 0; i < this.allPermissions.length; i++) {
            if (this.searchPermissionsDisplayName
                && this.allPermissions[i].display_name.indexOf(this.searchPermissionsDisplayName) !== -1) {
                tableRow[i].style.backgroundColor = '#85ce61';
                if (!isjump) {
                    wrapperScrolling.scrollTo(0, i * tableRowHeight);
                    isjump = true;
                }
            } else {
                tableRow[i].style.backgroundColor = '#fff';
            }
        }
    }
    btnOk() {
        let self = this;
        // 这块逻辑建议放到父组件role.vue里去做 this.$emit('success',{role:self.role,multipleSelection:self.multipleSelection});
        self.$notify({
            title: '编辑“' + self.role.name + '”权限成功！',
            message: '自己对接Api,角色id：' + self.role.id + ',选择了' + self.multipleSelection.length + '项权限',
            type: 'success',
        });

        this.$emit('success');
        this.btnLoading = true;
        setTimeout(() => {
            this.btnLoading = false;
            this.dialogFormVisible = false;
            (this.$refs.permissionsTable as ElTable).clearSelection();
        }, 600);
    }

    mounted() {
        // 所有的权限可以使用前端的路由来生成，这只是一种思路，具体怎么做，取决于你们的后台权限架构。
        let self = this;
        let routes = AllRouter['options'].routes;
        if (!routes) {
            return;
        }
        let AllPermissions = routes[0].children;
        if (!AllPermissions) {
            return;
        }
        for (const permissions of AllPermissions) {
            self.allPermissions.push({
                id: '',
                name: permissions.name + 'View',
                display_name: permissions.meta.title + '查看权限',
                description: '查看权限',
            });
            self.allPermissions.push({
                id: '',
                name: permissions.name + 'Edit',
                display_name: permissions.meta.title + '编辑权限',
                description: '编辑权限',
            });
        }
    }
}
