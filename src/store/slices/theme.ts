import { createSlice } from '@reduxjs/toolkit';
import { STORAGE, THEME, IThemeConfig } from '../../constants';
import { DarkTheme, LightTheme } from '../../assets';

const getTheme = () => {
  const themesFromStorage = localStorage.getItem(STORAGE.THEMES);
  return themesFromStorage ? JSON.parse(themesFromStorage) : THEME.LIGHT;
};

interface ITheme {
  theme: string;
  themeConfig: IThemeConfig;
}

const initialState: ITheme = {
  theme: getTheme(),
  themeConfig: getTheme() === THEME.LIGHT ? LightTheme : DarkTheme,
};

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      state.themeConfig = state.theme === THEME.LIGHT ? LightTheme : DarkTheme;
      localStorage.setItem(STORAGE.THEMES, JSON.stringify(state.theme));
    },
  },
});

export default themeSlice;
