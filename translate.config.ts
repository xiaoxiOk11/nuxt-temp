import { Lang } from "language-translate/types";
import { defineConfig } from "language-translate/utils";

export default defineConfig({
  fromLang: Lang.en,
  fromPath: "src/i18n/en.ts", // 翻译源文件
  translate: [
    {
      label: "将结果翻译到locales文件夹下",
      targetConfig: [
        {
          targetLang: Lang.ar,
          outPath: "src/i18n/ar.ts",
        },
        {
          targetLang: Lang.de,
          outPath: "src/i18n/de.ts",
        },
        {
          targetLang: Lang.es,
          outPath: "src/i18n/es.ts",
        },
        {
          targetLang: Lang.tr,
          outPath: "src/i18n/tr.ts",
        },
        {
          targetLang: Lang["zh-CN"],
          outPath: "src/i18n/zh.ts",
        },
        {
          targetLang: Lang.ko,
          outPath: "src/i18n/ko.ts",
        },
      ],
    },
  ],
});
