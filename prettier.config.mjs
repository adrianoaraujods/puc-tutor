/**
 * @type {
 *   import('prettier').Config
 *   & import('prettier-plugin-tailwindcss').PluginOptions
 *   & import('@ianvs/prettier-plugin-sort-imports').PluginConfig
 * }
 * */
const config = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  /* @ianvs/prettier-plugin-sort-imports */
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/hooks/(.*)$",
    "^@/lib/(.*)$",
    "^@/(.*)$",
    "",
    "^@/components/typography/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^(lucide-react/(.*)$)|^(lucide-react$)",
    "",
    "^types$",
    "^@/types/(.*)$",
    "<TYPES>",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrderCaseSensitive: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
