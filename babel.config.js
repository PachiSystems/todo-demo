const path = require('path');

module.exports = {
  presets: [
    [
      'next/babel',
      {
        'styled-jsx': {
          optimizeForSpeed: true,
          vendorPrefixes: false,
          plugins: [
            [
              'styled-jsx-plugin-sass',
              {
                sassOptions: {
                  includePaths: [
                    path.join(
                      __dirname,
                      'node_modules',
                      '@havenengineering',
                      'module-shared-library',
                      'dist'
                    ),
                  ],
                  indentWidth: 8,
                  precision: 8,
                },
              },
            ],
          ],
        },
      },
      '@babel/preset-react',
    ],
  ],
  plugins: ['@babel/proposal-class-properties'],
};
