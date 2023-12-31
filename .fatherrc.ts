// noinspection JSUnusedGlobalSymbols

export default {
  cjs: {
    input: "src", // 默认编译目录
    output: "dist",
    platform: "node", // 默认构建为 Node.js 环境的产物
    transformer: "esbuild", // 默认使用 esbuild 以获得更快的构建速度
  },
};
