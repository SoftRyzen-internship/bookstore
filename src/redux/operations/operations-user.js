import { createAsyncThunk } from '@reduxjs/toolkit';
import * as userApi from 'services/sendFormData';

export const registerUser = createAsyncThunk(
  'user/register',
  async userData => {
    const data = await userApi.registerUser(userData);
    return data;
  }
);
export const changeUser = createAsyncThunk('user/change', async userData => {
  const data = await userApi.changeUserData(userData);
  return data;
});
export const changePassword = createAsyncThunk(
  'user/changepassword',
  async userDataPassword => {
    const data = await userApi.updatePassword(userDataPassword);
    return data;
  }
);

export const loginUser = createAsyncThunk('user/login', async userData => {
  const data = await userApi.loginUser(userData);
  // console.log(document.cookie);

  return data;
});

export const logoutUser = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    // const persistedToken = thunkAPI.getState().auth.token;
    // await userApi.logoutUser(persistedToken);
    const data = await userApi.logOut();
    return data;
  }
);

export const currentUser = createAsyncThunk(
  'user/current',
  async (_, thunkAPI) => {
    // const persistedToken = thunkAPI.getState().auth.token;
    // if (!persistedToken) return thunkAPI.rejectWithValue();
    const data = await userApi.currentUser();
    return data;
  }
);
export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const data = await userApi.refresh();
    return data;
  }
);
