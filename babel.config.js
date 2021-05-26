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
