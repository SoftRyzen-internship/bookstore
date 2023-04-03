import { createSlice } from '@reduxjs/toolkit';
import * as extraReducersUser from 'redux/reducers/reducers-user';
const initialState = {
  user: {
    firstName: null,
    lastName: null,
    fathersName: null,
    phone: null,
    email: null,
    role: null,
  },
  token: null,
  error: null,
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken(state, { payload }) {
      return { ...state, ...payload };
    },
    deleteUser() {
      return { ...initialState };
    },
  },
  extraReducers: {
    ...extraReducersUser.registerUser,
    ...extraReducersUser.loginUser,
    ...extraReducersUser.currentUser,
    ...extraReducersUser.logoutUser,
  },
});

export default userSlice.reducer;
export const { setUserToken, deleteUser } = userSlice.actions;
