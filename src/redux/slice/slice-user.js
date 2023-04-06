import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as operations from 'redux/operations/operations-user';

const initialState = {
  user: {
    firstName: null,
    lastName: null,
    fathersName: null,
    phone: null,
    email: null,
    role: null,
    error: null,
  },
  token: null,
  error: null,
  isAuth: false,
  isLoading: false,
  isError: false,
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
    setError(state, { payload }) {
      state.isError = true;
      state.error = payload;
      state.isLoading = false;
    },
    setFormError(state, { payload }) {
      state.formError = payload;
    },
    clearError(state) {
      state.isError = false;
      state.error = null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(operations.loginUser.fulfilled, state => {
        state.isLoading = false;
        state.isError = false;
        state.isAuth = true;
      })
      .addCase(operations.changePassword.fulfilled, state => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(operations.registerUser.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.role = payload.role;
        state.isAuth = true;
      })
      .addCase(operations.currentUser.fulfilled, (state, { payload }) => {
        const { email, firstName, lastName, fathersName, phone, role } =
          payload.data.user;
        state.user.email = email;
        state.user.firstName = firstName;
        state.user.lastName = lastName;
        state.user.fathersName = fathersName;
        state.user.phone = phone;
        state.user.role = role;
        state.isAuth = true;
      })
      .addCase(operations.logoutUser.fulfilled, state => {
        state.user = initialState.user;
        state.isAuth = false;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(operations.logoutUser.rejected, (state, action) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(operations.loginUser.pending, state => {
        state.isLoading = true;
        state.isAuth = false;
        state.isError = false;
      })
      .addCase(operations.changePassword.pending, state => {
        state.isLoading = true;

        state.isError = false;
      })
      .addCase(operations.registerUser.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(operations.loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isError = true;
      })
      .addCase(operations.changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isError = true;
      })
      .addCase(operations.registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isError = true;
      })
      .addCase(operations.changeUser.pending, (state, _) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(operations.changeUser.fulfilled, (state, action) => {
        const { email, firstName, lastName, fathersName, phone } =
          action?.meta?.arg;
        state.user = {
          ...state.user,
          email: email,
          firstName: firstName,
          lastName: lastName,
          fathersName: fathersName,
          phone: phone,
        };
        state.isAuth = true;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(operations.changeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isError = true;
      })
      .addMatcher(
        action =>
          action.type.startsWith('/user') && action.type.endsWith('/pending'),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action =>
          action.type.startsWith('/user') && action.type.endsWith('/rejected'),
        (state, action) => {
          state.isAuth = false;
          state.isLoading = false;
          state.isError = true;
          state.error = action.error; // зберігаємо текст помилки
        },
        { returnRejectedValue: true } // опція для повернення помилки
      )
      .addMatcher(
        action =>
          action.type.startsWith('/user') && action.type.endsWith('/fulfilled'),
        state => {
          state.isLoading = false;
          state.isError = false;
        }
      ),
});
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['isAuth'],
};
export default userSlice.reducer;
export const { setUserRole, setUserToken, deleteUser } = userSlice.actions;
export const userReducer = persistReducer(persistConfig, userSlice.reducer);
