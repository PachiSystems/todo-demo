const path = require('path');
const withImages = require('next-images');
const withFonts = require('next-fonts');
module.exports = withImages(
  withFonts({
    basePath: '',
    // TODO: Public runtime config goes here (extract)
    publicRuntimeConfig: {},
    webpack: (config, {defaultLoaders}) => {
      config.module.rules.push({
        test: /\.(js|jsx|ts|tsx)$/,
        include: [],
        use: [defaultLoaders.babel],
      });

      config.resolve.alias['styled-jsx'] = path.resolve(
        __dirname,
        '.',
        'node_modules',
        'styled-jsx'
      );

      /** Resolve aliases */
      return config;
    },
  })
);
