const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-a11y',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  // Added so that Storybook can resolve absolute paths
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@/assets": path.resolve(__dirname, "../src/assets"),
      "@/components": path.resolve(__dirname, "../src/components"),
      "@/hooks": path.resolve(__dirname, "../src/hooks"),
      "@/shared-types": path.resolve(__dirname, "../src/shared-types")
    };
    
    return config;
  }
}