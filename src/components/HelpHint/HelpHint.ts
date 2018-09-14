import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class HelpHint extends Vue {
    @Prop() placement: {
        default: 'top',
    };

    @Prop(String) content: string;

}
