const pjson = require("./package.json");
const withSass = require("@zeit/next-sass");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withSass({
    pageExtensions: ["tsx", "mdx"],
    generateBuildId: async () => {
      return `build-${pjson.version}`;
    },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[sha512:hash:base64:4]-[hash:hex:8]",
    },
  }),
);
