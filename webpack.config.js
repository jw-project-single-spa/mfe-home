const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "jw-project",
    projectName: "mfe-home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: [
      "@jw-project/api",
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "jotai",
      "moment",
      "react-hook-form",
      "@hookform/resolvers/zod",
      "zod",
      "rxjs",
    ],
  });
};
