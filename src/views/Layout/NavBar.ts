import { Component, Vue, Watch } from 'vue-property-decorator';
import ScrollPane from '@/components/ScrollPane/Index.vue';

@Component({
  components: {
    ScrollPane,
  },
  watch: {
    $route: {
      handler() {
        let index = this.$Func.hasValInArrayObj(this.nav, 'path', this.$route.path);
        if (index !== -1) { return; }
        this.nav.push({
          path: this.$route.path,
          title: this.$route.meta.title,
        });

      },
      // 深度观察
      deep: true,
    },
  },
})
export default class Footer extends Vue {
  nav: any[] = [];

  closeSelectedTag(i) {
    let nav = this.nav;
    let thisPath = nav[i].path;
    nav.splice(i, 1);
    if (thisPath === this.$route.path) {
      this.$router.push(nav[(nav.length - 1)].path);
    }

  }

  mounted() {
    this.nav.push({
      path: this.$route.path,
      title: this.$route.meta.title,
    });
  }
}
