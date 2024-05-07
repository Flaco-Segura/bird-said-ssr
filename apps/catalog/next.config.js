const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { config } = require("process");

const remotes = isServer => {
  const location = isServer ? "ssr" : "chunks";
  return {
    catalog: `catalog@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};

module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "catalog",
        filename: "static/chuncks/remoteEntry.js",
        exposes: {
          "./Module": "./pages/index.tsx",
        },
        remotes: remotes(options.isServer),
        shared: {},
        extraOptions: {
          automaticAsyncBoundary: true,
        },
      })
    );

    return config;
  }
}
