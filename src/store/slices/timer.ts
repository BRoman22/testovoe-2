import { createSlice } from '@reduxjs/toolkit';

interface ITimer {
  timer: number;
}

const initialState: ITimer = {
  timer: -1,
};

const timerSlice = createSlice({
  name: 'timerSlice',
  initialState,
  reducers: {
    setTimer(state, action: { payload: number }) {
      state.timer = action.payload;
    },
  },
});

export default timerSlice;
