<!--
 * @Author: yedaf
 * @Date: 2022-02-21 14:33:57
 * @LastEditTime: 2022-02-21 16:57:45
 * @LastEditors: yedaf
 * @Description: 导航栏组件
-->
<template>
    <div class="navbar-container">
        <el-menu :default-active="active" mode="horizontal" class="web-show">
            <!-- 首页 -->
            <el-menu-item index="/">
                <router-link to="/" class="main-menu-link">
                    <span>首页</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="/login">
                <router-link to="/login" class="main-menu-link">
                    <span>不是首页</span> 
                </router-link>
            </el-menu-item>
            <el-menu-item>
                <span class="main-menu-link">帮助</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const active = ref('')
</script>
<style lang="scss">
.navbar-container .el-menu {
    background-color: transparent;
}

.navbar-container {
    width: 100%;
    .tag {
        font-size: 12px;
        color: #ababab;
    }
}

.pool-name-header {
    float: left;
    text-align: center;
}

.menu-link {
    display: block;
    height: 100%;
    padding-left: 10px;
    .tag {
        font-size: 12px;
        color: #ababab;
    }
}
.main-menu-link {
    display: block;
    height: 100%;
    padding: 0 20px;
}
.account-name {
    padding-left: 20px !important;
    position: relative;
}

.pool-menu {
    .el-menu--popup {
        min-width: 150px;
    }
}

.account-name .account-name-item {
    padding-left: 30px;
}

.account-name .icon-point {
    position: absolute;
    top: 10px;
    left: 20px;
}

.navbar-container .login-button {
    float: right;
    text-align: center;
}
.navbar-container .login-button a {
    display: inline-block;
    padding: 0 5px;
    height: 60px;
    line-height: 60px;
}
.navbar-container .login-button a:hover {
    color: #303133;
}

.navbar-container .el-menu-item {
    border-bottom: transparent !important;
    padding: 0px;
}

.luxbar .logo-name {
    padding-right: 30px;
    font-weight: 500;
    font-size: 18px;
}

.luxbar .img-logo {
    height: 40px;
    margin: 0px 10px 0 0;
}

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title a {
    color: #303133;
}

.el-menu--horizontal > .el-submenu:focus .el-submenu__title a {
    color: #303133;
}

.luxbar-menu-dark,
.luxbar-menu-dark .dropdown ul {
    background-color: #fff !important;
    color: #000 !important;
    z-index: 999 !important;
}

.luxbar-menu-dark .luxbar-hamburger span,
.luxbar-menu-dark .luxbar-hamburger span::before,
.luxbar-menu-dark .luxbar-hamburger span::after {
    background-color: #000 !important;
}
.mobile-show {
    display: none;
}
.web-show {
    display: block;
}
.luxbar-hamburger {
    position: static !important;
}
.luxbar-static {
    box-shadow: none !important;
}

.luxbar {
    .label {
        display: block;
        width: 100%;
        box-sizing: border-box;
        line-height: 30px;
        padding: 0 24px;
        cursor: pointer;
    }
}

.el-menu--horizontal {
    border: none !important;
}

.personal-center {
    float: right !important;
}

@media screen and (max-width: 767px) {
    .luxbar-hamburger {
        position: absolute !important;
        right: 20px;
        top: 10px;
    }
    .mobile-show {
        display: block;
    }

    .ul-pool-name {
        padding-left: 30px;
    }
    .navbar-container .login-button,
    .web-show {
        display: none !important;
    }

    .luxbar .luxbar-header {
        position: fixed;
        padding-left: 20px;
        width: 100%;
        z-index: 999;
        background-color: #fff;
    }
    .luxbar .luxbar-first {
        margin-top: 58px;
    }
}
</style>