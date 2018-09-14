import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TreeCategory extends Vue {
  @Prop() data!: any;
  deleteDepart(id: any, e: any) {
    this.$emit('delete-category', id);
    e.cancelBubble = true;
  }
  add(node: any, e: any) {
    this.$emit('add-category', node.data);
    e.cancelBubble = true;
  }
  edit(node: any, e: any) {
    this.$emit('edit-category', node.data);
    e.cancelBubble = true;
  }
  info(node: any, e: any) {
    let info = node.data;
    // tslint:disable-next-line:max-line-length
    this.$alert('<strong style="margin-right: 18px">分类名称:</strong>' + info.name + ' <br><br><strong>分类描述:</strong><br><div class="category-description">' + (info.comment ? info.comment : '暂无描述') + '</div>', '分类详情', {
      type: 'info',
      dangerouslyUseHTMLString: true,
    }).then((r) => { });

    e.cancelBubble = true;
  }

  mounted() {
    console.log(this.data);
  }
}
