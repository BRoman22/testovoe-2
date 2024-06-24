import { DefaultTheme } from './defaultTheme';
import type { IThemeConfig } from '../../constants';

export const LightTheme: IThemeConfig = {
  token: {
    ...DefaultTheme,
    colorTextBase: '#000',
  },
  components: {
    Layout: {
      headerBg: '#f5f5f5',
      bodyBg: '#f5f5f5',
      headerHeight: '128px',
    },
    Input: {
      colorBgContainer: '#f5f5f5',
      colorText: 'rgba(0, 0, 0, 0.85)',
      colorBorder: '#3D3D3D',
    },
    Checkbox: {
      colorBgContainer: '#fff',
    },
    Radio: {
      colorBgContainer: '#fff',
    },
  },
};
