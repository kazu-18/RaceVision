import { createSlice } from "@reduxjs/toolkit";

export const animConfigSlice = createSlice({
  name: "animConfig",
  initialState: {
    isAnimating: false,
    duration: 2000,
    pauseTime: 0,
  },
  reducers: {
    toggleAnim: (state) => {
      console.log("is animating", state.isAnimating)
      state.isAnimating = !state.isAnimating;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
      console.log(state.duration)
    },
    setPauseTime: (state, pauseTime) => {
      state.pauseTime = pauseTime;
    },
  },
});

export const {toggleAnim,setDuration,setPauseTime} = animConfigSlice.actions;

export default animConfigSlice.reducer;