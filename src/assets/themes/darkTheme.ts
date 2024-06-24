import { DefaultTheme } from './defaultTheme';
import type { IThemeConfig } from '../../constants';

export const DarkTheme: IThemeConfig = {
  token: {
    ...DefaultTheme,
    colorTextBase: '#fff',
  },
  components: {
    Layout: {
      headerBg: '#1e1e1e',
      bodyBg: '#1e1e1e',
      headerHeight: '128px',
      fontSizeXL: '32px',
    },
    Input: {
      colorBgContainer: '#272727',
      colorText: 'rgba(255, 255, 255, 0.85)',
      colorBorder: '#3D3D3D',
    },
    Checkbox: {
      colorBgContainer: '#272727',
      colorBorder: '#1e1e1e',
    },
    Radio: {
      colorBgContainer: '#272727',
      colorBorder: '#1e1e1e',
    },
    Tooltip: {
      colorBgSpotlight: '#1e1e1e',
    },
  },
};
