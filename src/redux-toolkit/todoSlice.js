import {createSlice} from '@reduxjs/toolkit';
import Category from '../utils/Category';
import {readData, storeData} from './todoThunk';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    taskList: [
      {
        id: 1,
        name: 'Finish the homework',
        completed: false,
        category: Category.WORK,
      },
    ],
    taskItem: {
      category: {
        type: 'WORK',
        payload: Category.WORK,
      },
    },
    showingAddTask: false,
    isLoading: false,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    showAddTask: state => {
      state.showingAddTask = !state.showingAddTask;
    },
    setTaskItem: (state, payload) => {
      state.taskItem.category = payload;
    },
    toggleCompleted: (state, payload) => {
      state.taskList.forEach(item =>
        item.id === payload.payload ? (item.completed = !item.completed) : null,
      );
    },
    editTask: (state, action) => {
      state.taskList.map((item, index) => {
        if (item.id === action.payload.id) {
          state.taskList[index] = action.payload;
        }
      });
    },
    deleteCompleted: (state, action) => {
      const newState = state.taskList.filter(item => item.completed === false);
      state.taskList = newState;
    },
  },
  extraReducers: {
    [storeData.pending.type]: state => {
      state.isLoading = true;
    },
    [storeData.fulfilled.type]: state => {
      state.isLoading = false;
      console.log('STORE DATA SUCCESSFUL');
    },
    [storeData.rejected.type]: (state, action) => {
      state.isLoading = false;
      console.log('rejected', action.error.message);
    },
    [readData.pending.type]: state => {
      console.log('STORING DATA');
    },
    [readData.fulfilled.type]: (state, action) => {
      console.log(action.payload);
      console.log('READ DATA SUCCESSFUL');
    },
    [readData.rejected.type]: (state, action) => {
      console.log('READ DATA FAIL');
      console.log('rejected', action.error.message);
    },
  },
});

export const {
  addTask,
  showAddTask,
  setTaskItem,
  toggleCompleted,
  editTask,
  deleteCompleted,
} = todoSlice.actions;
export default todoSlice.reducer;
