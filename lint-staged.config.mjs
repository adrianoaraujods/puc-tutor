/**
 * @type {import('lint-staged').Configuration}
 */
const lintStagedConfig = {
  "*/**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts}": [
    "prettier --write",
    "eslint --fix",
  ],
  "*/**/*.{css,json,md,mdx,yaml,yml}": ["prettier --write"],
};

export default lintStagedConfig;
