// module.exports = {
//   presets: ["@vue/cli-plugin-babel/preset"]
// };
module.exports = {
  presets: [
    ['@vue/babel-preset-app', { modules: false }],
  ],
  plugins: [
    'dynamic-import-node',
  ],
  env: {
    test: {
      presets: [
        ['@vue/babel-preset-app', { modules: 'commonjs', useBuiltIns: false }],
      ],
    },
  },
};