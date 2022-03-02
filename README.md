<!--
 * @Author: yedaf
 * @Date: 2022-02-22 10:45:27
 * @LastEditTime: 2022-03-01 16:59:34
 * @LastEditors: your name
 * @Description: readme 文档
 * @FilePath: \home-page\README.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# Vue 3 + Typescript + Vite

I use official template Vue 3 + Typescript to build .The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

# Other techs

element-plus + vue-router + vuex + vue-i18n

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Getting started

``` bash
# clone the project
git clone https://github.com/frankye23/home-page.git

# install dependencies
npm install

# serve with hot reload at localhost:8086
npm run dev
```

This will automatically open <http://localhost:3000/>.
