import { createSlice } from "@reduxjs/toolkit";

interface Task {
  // id:number
  text: string;
  isCompleted: boolean;
}

const initialState: Task[] = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.push(action.payload);
    },
    // mark task as completed
    setCompleted: (state, action) => {
      state[action.payload].isCompleted = !state[action.payload].isCompleted;

      // const selected = state[action.payload.i]
      // console.log(action.payload);

      //   console.log(selected);
    },
    // delete task
    deleteTask: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTask, deleteTask, setCompleted } = taskSlice.actions;

export default taskSlice.reducer;
