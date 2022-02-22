/*
 * @Author: yedaf
 * @Date: 2022-02-22 09:21:41
 * @LastEditTime: 2022-02-22 13:46:29
 * @LastEditors: yedaf
 * @Description: 
 * @FilePath: \home-page\src\locale\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import type { App } from 'vue';
import type { I18n, I18nOptions } from 'vue-i18n';

import { createI18n } from 'vue-i18n';




export let i18n: ReturnType<typeof createI18n>;

async function createI18nOptions(): Promise<I18nOptions> {

  return {
    legacy: false,
    sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
    silentTranslationWarn: true, // true - warning off
    missingWarn: false,
    silentFallbackWarn: true,
  };
}

// setup i18n instance with glob
export async function setupI18n(app: App) {
  const options = await createI18nOptions();
  i18n = createI18n(options) as I18n;
  app.use(i18n);
}
