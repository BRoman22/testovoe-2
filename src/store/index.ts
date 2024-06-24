import { configureStore, bindActionCreators } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import themeSlice from './slices/theme';
import resultsSlice from './slices/results';
import timerSlice from './slices/timer';

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    results: resultsSlice.reducer,
    timer: timerSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

const actions = {
  ...themeSlice.actions,
  ...resultsSlice.actions,
  ...timerSlice.actions,
};

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => bindActionCreators(actions, useAppDispatch());
