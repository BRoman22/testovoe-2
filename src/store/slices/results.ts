import { createSlice } from '@reduxjs/toolkit';
import { ITest, STORAGE } from '../../constants';

const getTestFromStorage = (): ITest => {
  const testFromStorage = localStorage.getItem(STORAGE.TEST);
  return testFromStorage
    ? JSON.parse(testFromStorage)
    : { questions: [], current: 0, time: 0 };
};
const setTestInStorage = (test: ITest) => {
  localStorage.setItem(STORAGE.TEST, JSON.stringify(test));
};

const initialState: ITest = getTestFromStorage();

const resultsSlice = createSlice({
  name: 'resultsSlice',
  initialState,
  reducers: {
    setTest(state, action: { payload: ITest }) {
      state.questions = action.payload.questions;
      state.time = action.payload.time;
      state.current = action.payload.current;
      setTestInStorage(state);
    },
  },
});

export default resultsSlice;
