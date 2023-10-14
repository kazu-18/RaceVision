import { createSlice } from "@reduxjs/toolkit";

const defaultHorses = [
    {
      bracketNum: 1,
      horseNum: 1,
      name: "ソングライン",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 2,
      horseNum: 2,
      name: "ソダシ",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 3,
      horseNum: 3,
      name: "イクイノックス",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 4,
      horseNum: 4,
      name: "スマイルコレクター",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 5,
      horseNum: 5,
      name: "",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 6,
      horseNum: 6,
      name: "",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 7,
      horseNum: 7,
      name: "",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
    {
      bracketNum: 8,
      horseNum: 8,
      name: "",
      visible: true,
      currentPos: { x: null, y: null },
      startPos: { x: null, y: null },
      endPos: { x: null, y: null },
    },
  ];

const horseSlice = createSlice({
    name:"horses",
    initialState:{
        horses:defaultHorses
    },
    reducers:{
        setHorse:(state,action) => {
            console.log(state,action);
            const horseNum = action.payload.horseNum;
            const name = action.payload.name;
            console.log(horseNum,name);
            state.horses[horseNum - 1].name = name;
        },
        toggleVisiblity:(state,action) => {
          const horseNum = action.payload.horseNum;
          state.horses[horseNum -1].visible = !state.horses[horseNum -1].visible;
        },
        setHorsePosition:(state,action) => {
          console.log(state,action);
          const horseNum = action.payload.horseNum;
          state.horses[horseNum - 1].currentPos.x = action.payload.x;
          state.horses[horseNum - 1].currentPos.y = action.payload.y;
        }
    }
})

export const { setHorse,toggleVisiblity,setHorsePosition } = horseSlice.actions;
export default horseSlice.reducer;