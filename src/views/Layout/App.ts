import { Component, Vue } from 'vue-property-decorator';
import Screenfull from 'screenfull';
import EuiFooter from '@/views/Layout/Footer.vue';
import NavBar from './NavBar.vue';
import Menu from '@/menu/index.ts';


@Component({
    components: {
        EuiFooter,
        NavBar,
    },
})
export default class Home extends Vue {
    fixedTabBar = false;
    switchTabBar = false;
    siteName = this.$Config.siteName;
    isCollapse = false;
    menu = Menu;
    NavBarWidth() {
        let navBar = document.getElementById('nav-bar');
        if (!navBar) {
            return;
        }
        if (!(this.fixedTabBar && this.switchTabBar)) { navBar.style.width = '100%'; return; }
        let sidebarClose = document.body.classList.contains('sidebar-close');
        if (sidebarClose) { navBar.style.width = '100%'; return; }
        if (this.isCollapse) {
            navBar.style.width = 'calc(100% - 64px)';
        } else {
            navBar.style.width = 'calc(100% - 230px)';
        }

    }

    ToggleGrayMode() {
        document.body.classList.toggle('gray-mode');
    }
    screenfullToggle() {
        if (!Screenfull.enabled) {
            this.$message({
                message: '你的浏览器不支持全屏！',
                type: 'warning',
            });
            return false;
        }
        Screenfull.toggle();
    }

    saveFixedTabBar(v) {
        v ? localStorage.setItem('fixedTabBar', v) : localStorage.removeItem('fixedTabBar');
        this.NavBarWidth();
    }

    saveSwitchTabBarVal(v) {
        let containerDom = document.getElementById('mainContainer');
        if (containerDom) {
            v ? containerDom.style.minHeight = 'calc(100vh - 139px)'
                : containerDom.style.minHeight = 'calc(100vh - 101px)';
        }
        v ? localStorage.setItem('switchTabBar', v) : localStorage.removeItem('switchTabBar');
        this.NavBarWidth();
    }

    sidebarToggle(e) {
        e.preventDefault();
        if (this.isCollapse) {
            document.body.classList.remove('sidebar-hidden');
            this.siteName = this.$Config.siteName;
            this.isCollapse = false;
        } else {
            document.body.classList.add('sidebar-hidden');
            this.isCollapse = true;
        }
        this.NavBarWidth();

    }

    hiddenSidebar(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-close');
        this.NavBarWidth();
    }

    logout() {
        sessionStorage.removeItem(this.$Config.tokenKey);
        this.$router.push({ path: '/login' });
    }

    handleOpen(key, keyPath) {
        // console.log(key, keyPath);
    }

    handleClose(key, keyPath) {
        // 关闭菜单
    }

    mounted() {
        this.switchTabBar = localStorage.getItem('switchTabBar') ? true : false;
        this.fixedTabBar = localStorage.getItem('fixedTabBar') ? true : false;
        let mainContainer = document.getElementById('mainContainer');

        if (this.switchTabBar) {
            if (mainContainer) {
                mainContainer.style.minHeight = 'calc(100vh - 139px)';
            }
        }

        if (!this.isCollapse) {

            document.body.classList.remove('sidebar-hidden');
            this.siteName = this.$Config.siteName;
        } else {
            document.body.classList.add('sidebar-hidden');
        }

        setTimeout(() => { this.NavBarWidth(); }, 1000);
    }
}
