const path = require('path');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')(
  ['@havenengineering/module-shared-library'],
  { resolveSymlinks: true }
);
const aliasPathsToResolve = [
  {
    name: 'components',
    path: path.resolve(
      __dirname,
      'node_modules',
      '@havenengineering',
      'module-shared-library',
      'dist'
    ),
  },
];
module.exports = withImages(
  withFonts(
    withTM({
      basePath: '',
      // TODO: Public runtime config goes here (extract)
      publicRuntimeConfig: {},
      webpack: (config, { defaultLoaders }) => {
        config.module.rules.push({
          test: /\.(js|jsx|ts|tsx)$/,
          include: [
            path.resolve(
              __dirname,
              'node_modules',
              '@havenengineering',
              'module-shared-library',
              'dist'
            ),
          ],
          use: [defaultLoaders.babel],
        });

        config.resolve.alias['styled-jsx'] = path.resolve(
          __dirname,
          '.',
          'node_modules',
          'styled-jsx'
        );

        /** Resolve aliases */
        aliasPathsToResolve.forEach((module) => {
          config.resolve.alias[module.name] = module.path;
        });
        return config;
      },
    })
  )
);
