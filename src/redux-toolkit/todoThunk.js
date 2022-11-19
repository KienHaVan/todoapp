import {createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = createAsyncThunk(
  'todo/storeData',
  async (value, {rejectWithValue}) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('dataTodoList', jsonValue);
    } catch (error) {
      console.log(error);
      return rejectWithValue('STORE DATA FAIL');
    }
  },
);

export const readData = createAsyncThunk(
  'todo/readData',
  async ([], {rejectWithValue}) => {
    try {
      const jsonValue = await AsyncStorage.getItem('dataTodoList');
      if (!jsonValue) {
        return [];
      }
      const results = await JSON.parse(jsonValue);
      return results;
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(error);
      return rejectWithValue('READ DATA FAIL');
    }
  },
);
