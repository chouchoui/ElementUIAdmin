<template>
  <div class="main">
    <div class="header">
      <div class="logo">
        <span class="big">{{ $Config.siteName }}</span>
        <span class="min">{{ $Config.minSiteMame }}</span>
      </div>
      <span class="header-btn" @click="hiddenSidebar">
        <i class="el-icon-menu"></i>
      </span>
      <div class="right">
        <span class="header-btn" @click="screenfullToggle">
          <i class="fa fa-arrows-alt"></i>
        </span>

        <el-dropdown>
          <span class="header-btn">
            <i class="el-icon-setting"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <div style="padding: 10px;text-align: center;width: 420px">
              <div class="setting-category">
                <el-switch @change="saveSwitchTabBarVal" v-model="switchTabBar" active-text="开启TabBar" inactive-text="关闭TabBar">
                </el-switch>
                <el-switch @change="saveFixedTabBar" v-if="switchTabBar" v-model="fixedTabBar" style="margin-top: 10px" active-text="固定在顶部" inactive-text="随页面滚动">
                </el-switch>
                <el-alert v-if="switchTabBar" style="margin-top: 10px" title="导航标签超过容器时,可在导航上滚动鼠标来移动标签" type="info" show-icon>
                </el-alert>
              </div>
              <div class="setting-category" style="display: flex;height: 80px;align-items: center">
                <div style="width: 80px">
                  <el-button type="primary" icon="el-icon-sort" circle @click="ToggleGrayMode" style="transform: rotate(90deg)"></el-button>
                </div>
                <div style="flex: 1;margin-top: -8px">
                  <el-alert style="margin-top: 10px" title="切换灰度模式!" type="info" show-icon>
                  </el-alert>
                </div>
              </div>
              <!--<div class="setting-category">-->
              <!--下个设置块-->
              <!--</div>-->

            </div>
          </el-dropdown-menu>
        </el-dropdown>

        <span class="header-btn">
          <el-badge :value="3" class="badge">
            <i class="el-icon-bell"></i>
          </el-badge>
        </span>
        <el-dropdown>
          <span class="header-btn">
            Admin
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="$router.push('/personal')">
              <i style="padding-right: 8px" class="fa fa-cog"></i>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">
              <i style="padding-right: 8px" class="fa fa-key"></i>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="app">
      <div class="aside">
        <div class="menu">
          <el-menu router background-color="#222d32" text-color="#fff" :default-active="$route.path" class="menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <template v-for="(menu_v,menu_k) in menu">
              <el-submenu v-if="menu_v.children" :index="menu_k" :key="menu_k">
                <template slot="title">
                  <i :class="menu_v.icon"></i>
                  <span slot="title">{{ menu_v.name }}</span>
                </template>
                <el-menu-item v-for="(menuChildren_v,menuChildren_k) in menu_v.children" :key="menuChildren_k" :index="menuChildren_v.path">
                  <i class="is-children fa fa-circle-o"></i>
                  <span slot="title">{{ menuChildren_v.name }}</span>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="menu_v.path" :key="menu_k">
                <i :class="menu_v.icon"></i>
                <span slot="title">{{ menu_v.name }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </div>
        <div class="sidebar-toggle" @click="sidebarToggle">
          <div class="icon-left">
            <i class="el-icon-back"></i>
          </div>
        </div>
      </div>
      <div class="app-body">
        <NavBar id="nav-bar" v-if="switchTabBar" :style="fixedTabBar && switchTabBar?'position: fixed;top: 0;':''"></NavBar>
        <div v-else style="margin-top: 50px;"></div>
        <div id="mainContainer" :style="fixedTabBar && switchTabBar?'margin-top: 88px;':''" class="main-container">
          <!--<transition name="fade">-->
          <router-view></router-view>
          <!--</transition>-->
        </div>
        <EuiFooter></EuiFooter>
      </div>
    </div>
  </div>
</template>

<script src="./App.ts"></script>
<style src="./App.css"></style>

