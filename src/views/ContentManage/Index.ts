import { Component, Vue } from 'vue-property-decorator';
import ToolBar from '@/components/ToolBar/ToolBar.vue';
import HelpHint from '@/components/HelpHint/HelpHint.vue';

@Component({
    components: {
        ToolBar,
        HelpHint,
    },
})
export default class ContentManage extends Vue {
    searchParams = {
        postTitle: '',
        postType: '',
        postStatus: 'published',
    };
    tableData3 = [{
        date: '2016-05-03',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-02',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-04',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-01',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-08',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-06',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }, {
        date: '2016-05-07',
        name: 'Lorem ipsum dolor sit amet,',
        // tslint:disable-next-line:max-line-length
        address: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores fugit in quae vero. Adipisci blanditiis dignissimos eum facere laudantium quasi ratione repellat vitae! Alias consequatur dolores enim neque similique unde.',
    }];
    handleClick(row: any) {
        this.$alert(row, '标题名称', {
            confirmButtonText: '确定',
            callback: (action) => {
            },
        });
    }
    tableAction() {
        return this.$createElement('HelpHint', {
            props: {
                content: '查看文章 / 编辑文章',
            },
        }, '操作');
    }
}
