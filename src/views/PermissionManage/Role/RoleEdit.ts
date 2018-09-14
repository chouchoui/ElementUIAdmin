import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class RoleEdit extends Vue {
    @Prop(Boolean) dialogFormVisible!: boolean;
    @Prop() data!: any;
    @Prop(String) title!: string;

    form = {
        id: null,
        name: '',
        description: '',
    };
    btnLoading = false;

    @Watch('data', { deep: true })
    handlerData() {
        if (this.data) {
            for (const k in this.form) {
                if (this.form.hasOwnProperty(k)) {
                    this.form[k] = this.data[k];
                }
            }
        } else {
            for (const k in this.form) {
                if (this.form.hasOwnProperty(k)) {
                    this.form[k] = '';
                }
            }
        }
    }

    btnOk() {
        let errorMsg = '';
        let formData = this.form;

        if (formData.name.length <= 2) { errorMsg = '角色名称必须大于2个字符'; }

        if (errorMsg) {
            this.$message.error(errorMsg);
            return;
        }
        this.$emit('val-change', this.form);
        this.btnLoading = true;
        setTimeout(() => {
            this.btnLoading = false;
        }, 1000);
    }
}
