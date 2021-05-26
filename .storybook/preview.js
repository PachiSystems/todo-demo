export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
import React from 'react';

import { addDecorator } from '@storybook/react';

addDecorator((storyFn) => <div style={{ margin: 20 }}>{storyFn()}</div>);
