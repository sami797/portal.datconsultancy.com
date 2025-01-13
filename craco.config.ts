import path from 'path';
import { Configuration } from 'webpack'; // Import webpack types

export default {
  webpack: {
    alias: {
      "@atoms": path.resolve(__dirname, "src/Components/Atoms"),
      "@organisms": path.resolve(__dirname, "src/Components/Organisms"),
      "@icons": path.resolve(__dirname, "src/Components/Icons"),
      "@modules": path.resolve(__dirname, "src/Modules"),
      "@templates": path.resolve(__dirname, "src/Components/Templates"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@services": path.resolve(__dirname, "src/services"),
    },
    configure: (webpackConfig: Configuration) => { // Explicitly type the webpackConfig
      // Disable CSS minimizer plugin
      webpackConfig.optimization!.minimizer = [];
      return webpackConfig;
    },
  },
};
