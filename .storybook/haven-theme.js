import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#007ABE',
  colorSecondary: '#007ABE',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#007cc2',
  appBorderRadius: 0,

  // Toolbar default and active colors
  barTextColor: '#b0e3ff',
  barSelectedColor: 'white',
  barBg: '#007ABE',

  brandTitle: 'Haven - Checkout Components',
  brandUrl: 'https://www.haven.com',
  brandImage:
    'https://holidays.haven.com/sw/skins/default/images/common/logo.svg',
});
