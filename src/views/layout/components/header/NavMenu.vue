<!--
 * @Author: yedaf
 * @Date: 2022-02-21 14:33:57
 * @LastEditTime: 2022-03-02 10:58:14
 * @LastEditors: your name
 * @Description: 导航栏组件
-->
<template>
    <div class="navbar-container">
        <el-menu :default-active="active" mode="horizontal" class="web-show">
            <!-- 首页 -->
            <el-menu-item index="/list">
                <router-link to="/list" class="main-menu-link">
                    <span>第一选项</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="/host">
                <router-link to="/host" class="main-menu-link">
                    <span>第二选项</span>
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

.el-menu--horizontal > .el-submenu.is-active .el-submenu__title a {
    color: #303133;
}

.el-menu--horizontal > .el-submenu:focus .el-submenu__title a {
    color: #303133;
}

.el-menu--horizontal {
    border: none !important;
}

.personal-center {
    float: right !important;
}
</style>