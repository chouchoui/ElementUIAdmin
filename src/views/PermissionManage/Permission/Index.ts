import { Component, Vue } from 'vue-property-decorator';
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import AllRouter from '@/router/';
import allApi from '@/api';

@Component({
    components: {
        ToolBar,
    },
    watch: {
        searchName: {
            handler() {
                let tableRow = this.$refs.permissionsList.$el.querySelectorAll('tbody tr');

                let tableRowHeight = tableRow[1].offsetHeight;
                let isjump = false;
                for (let i = 0; i < this.tableData3.length; i++) {
                    if (this.searchName && this.tableData3[i].display_name.indexOf(this.searchName) !== -1) {
                        tableRow[i].style.backgroundColor = '#85ce61';
                        if (!isjump) {
                            scrollTo(0, i * tableRowHeight + 50);
                            isjump = true;
                        }
                    } else {
                        tableRow[i].style.backgroundColor = '#fff';
                    }
                }
            },
        },
    },
})
export default class Permission extends Vue {
    searchName = '';
    tableData3: any[] = [];
    mounted() {
        let self = this;
        let AllPermissions = AllRouter['options'].routes[0].children;

        for (const permissions of AllPermissions) {
            self.tableData3.push({
                id: '',
                name: permissions.name + 'View',
                display_name: permissions.meta.title + '查看权限',
                description: '查看权限',
            });
            self.tableData3.push({
                id: '',
                name: permissions.name + 'Edit',
                display_name: permissions.meta.title + '编辑权限',
                description: '编辑权限',
            });
        }
    }
}
