import { createSlice } from '@reduxjs/toolkit';
import * as operations from 'redux/operations/operations-user';

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
    setUserRole(state, { payload }) {
      state.user.role = payload;
    },
    setUserToken(state, { payload }) {
      return { ...state, ...payload };
    },
    deleteUser() {
      return { ...initialState };
    },
  },
  extraReducers: builder =>
    builder.addCase(operations.loginUser.fulfilled, state => {}),
});

export default userSlice.reducer;
export const { setUserRole, setUserToken, deleteUser } = userSlice.actions;
