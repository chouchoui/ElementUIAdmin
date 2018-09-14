import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
    userNmae = '';
    password = '';
    Remenber = true;
    loginLoading = false;
    login() {
        let APP = this;
        APP.loginLoading = true;
        setTimeout(() => {
            sessionStorage.setItem(APP.$Config.tokenKey, '123456789');
            APP.$notify({
                title: '登录成功',
                message: '很高兴你使用ElementUIAdmin！别忘了给个Star哦。',
                type: 'success',
            });
            APP.loginLoading = false;
            APP.$router.push({ path: '/' });
        }, 1000);
    }
}
