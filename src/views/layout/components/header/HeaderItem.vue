<!--
 * @Author: yedaf
 * @Date: 2022-02-21 14:15:20
 * @LastEditTime: 2022-02-22 17:57:11
 * @LastEditors: your name
 * @Description: 头部组件
-->
<template>
    <div class="header-container">
        <div class="top">
            <div class="container clearfix">
                <router-link to="/" class="logo">
                    <img class="img-logo" src="../../../../assets/logo.png" />
                    <span class="logo-name">logo pic</span>
                </router-link>
                <div class="header-nav">
                    <navMenu></navMenu>
                    <div class="search">
                        <el-icon :size="20">
                            <mouse />
                        </el-icon>
                    </div>
                    <div class="bell">
                        <el-icon :size="20">
                            <search />
                        </el-icon>
                    </div>
                    <div class="global">
                        <el-popover trigger="hover" width="300">
                            <template #reference>
                                <el-icon :size="20">
                                    <orange />
                                </el-icon>
                            </template>
                            <el-menu
                                class="lang-menu"
                                :default-active="language"
                                @select="handleLang"
                            >
                                <el-menu-item
                                    v-for="item in langList"
                                    :key="item.value"
                                    :index="item.value"
                                >
                                    <svg class="icon" aria-hidden="true">
                                        <use :xlink:href="item.symbol" />
                                    </svg>
                                    {{ item.label }}
                                </el-menu-item>
                            </el-menu>
                        </el-popover>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import navMenu from '../header/NavMenu.vue'
// import useStore from '@/store/index.js'
const language = 'language'
const langList = [{
    value: 'zh-CN',
    label: '简体中文',
    symbol: '#icon-zhongguo'
},
{
    value: 'en',
    label: 'English',
    symbol: '#icon-meiguo'
},
{
    value: 'ru-Ru',
    label: 'русский',
    symbol: '#icon-eluosi'
}]
const token = 'aaa'
const setLanguage = (lang: any) => {
    localStorage.setItem('language', lang)
    // this.$store.dispatch('setLanguage', lang)
    // this.$i18n.locale = lang
}
const handleLang = (lang: any) => {
    const data = {
        lang
    }
    if (token) {
        if (token) {
            // usersSettings(data).then(() => {
            setLanguage(lang)
            // })
        }
        // else {
        //     this.setLanguage(lang)
        // }
    } else {
        // this.setLanguage(lang)
    }

}
</script>

<style lang="scss" scoped>
.top {
    margin: 0;
    background-color: #fff;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #f0f0f0;
}

.logo {
    float: left;
    height: 60px;
    line-height: 60px;
    padding-right: 30px;
    font-size: 18px;
    font-weight: 500;
}

.header-nav {
    display: flex;
    // overflow: hidden;
    .search {
        margin-left: 20px;
        margin-top: 14px;
        line-height: 40px;
        z-index: 999;
        cursor: pointer;
        .el-icon-search {
            font-size: 20px;
            color: rgb(117, 117, 117);
            &:hover {
                color: #00aad3;
            }
        }
    }
    .bell {
        margin-left: 20px;
        line-height: 40px;
        margin-top: 14px;
        cursor: pointer;
        .el-icon-bell {
            font-size: 20px;
            color: rgb(117, 117, 117);
            &:hover {
                color: #00aad3;
            }
        }
    }
    .global {
        margin-left: 20px;
        line-height: 40px;
        margin-top: 14px;
        .global-btn {
            color: rgb(117, 117, 117);
            padding: 0;
            &:hover {
                color: #00aad3;
            }
            .icon-global {
                font-size: 20px;
            }
        }
    }
}

.img-logo {
    float: left;
    height: 40px;
    margin: 8px 10px 0 0;
}

@media (max-width: 768px) {
    .logo {
        height: 58px;
        line-height: 58px;
    }
}
</style>