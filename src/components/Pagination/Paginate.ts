import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component
export default class Paginate extends Vue {

    @Prop(String) api: string;
    @Prop() params: any;
    @Prop(Boolean) refresh: boolean;
    total = 0
    current = 0
    currentDataLength = 0

    paginate() {

        let params = this.params;
        params.pageSize = this.$Config.pageSize;
        params.pageCode = this.current;
        let thisApp = this;

        thisApp.$Api[thisApp.api](params, function (data) {
            thisApp.total = data.total;
            thisApp.currentDataLength = (data.list).length
            thisApp.$emit('val-change', data.list);
        })
    }
    change(page) {
        this.current = page;
        this.paginate();
    }

    @Watch('refresh', { deep: true })
    handlerRefresh() {
        this.current = 0;
        this.paginate();
    }
    mounted() {
        this.paginate();
    }
}