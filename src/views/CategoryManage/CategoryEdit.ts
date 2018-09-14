import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { promises } from 'fs';
import { on } from 'cluster';
@Component
export default class CategoryEdit extends Vue {
    @Prop(Boolean) dialogFormVisible!: boolean;
    @Prop() data!: any;
    @Prop(String) title!: string;
    @Prop(Array) departTree!: Array<any>;

    props = {
        value: 'id',
        label: 'name',
        children: 'children'
    };
    form: any = {
        id: null,
        name: '',
        pid: '',
        comment: '',
    };
    btnLoading = false;

    @Watch("data", { deep: true })
    onDataChanged() {
        if (this.data) {
            for (let k in this.form) {
                this.form[k] = this.data[k];
            }
        } else {
            for (let k in this.form) {
                this.form[k] = '';
            }
        }
    }

    btnOk() {
        let errorMsg: string = "";
        let formData = this.form;

        if (formData.name && formData.name.length <= 2) errorMsg = '分类名称必须大于2个字符';

        if (errorMsg) {
            this.$message.error(errorMsg);
            return;
        }

        this.$emit('val-change', this.form);
        this.btnLoading = true;
        setTimeout(() => { this.btnLoading = false }, 1000)
    }
}