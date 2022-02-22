<!--
 * @Author: your name
 * @Date: 2022-02-18 10:42:56
 * @LastEditTime: 2022-02-21 17:46:05
 * @LastEditors: your name
 * @Description: layout组件
 * @FilePath: \algoPlatform\src\views\layout\Layout.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
    <div class="app-wrapper">
        <header-item />
        <div class="main-container">
            <router-view />
        </div>
        <footer-item />
    </div>
</template>

<script lang="ts" setup>
import HeaderItem from './components/header/HeaderItem.vue'
import FooterItem from './components/footer/FooterItem.vue'

</script>
<style lang="scss">
.app-wrapper {
    .main-container {
        min-height: calc(100vh - 234px - 61px);
        background-color: #f4f4f4;
        box-sizing: border-box;
        .main-content {
            padding: 20px 0px 80px 0px;
        }
    }
}
@media (max-width: 768px) {
    .main-container {
        .main-content {
            padding: 20px 0px 30px 0px !important;
        }
    }
}
</style>
