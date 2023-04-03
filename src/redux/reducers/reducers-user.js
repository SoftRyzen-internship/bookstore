import * as operations from '../operations/operations-user';

export const registerUser = {
  [operations.registerUser.fulfilled]: state => {
    state.error = null;
    state.isAuth = false;
    state.isLoading = false;
  },
  [operations.registerUser.rejected]: (state, { error }) => {
    state.error = error.message;
    state.isLoading = false;
  },
  [operations.registerUser.pending]: state => {
    state.isLoading = true;
  },
};

export const loginUser = {
  [operations.loginUser.fulfilled]: (state, { payload }) => {
    const { token, user } = payload;
    state.error = null;
    state.token = token;
    state.user = user;
    state.isAuth = true;
    state.isLoading = false;
  },
  [operations.loginUser.rejected]: (state, { error }) => {
    state.error = error.message;
    state.isLoading = false;
  },
  [operations.loginUser.pending]: state => {
    state.isLoading = true;
  },
};

export const currentUser = {
  [operations.currentUser.fulfilled]: (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.user.token;
    state.isAuth = true;
    state.isLoading = false;
    state.error = null;
  },
  [operations.currentUser.rejected]: (state, { error }) => {
    state.error = error.message;
    state.isLoading = false;
  },
  [operations.currentUser.pending]: state => {
    state.isLoading = true;
  },
};

export const logoutUser = {
  [operations.logoutUser.fulfilled]: state => {
    state.error = null;
    state.token = null;
    state.user.firstName = null;
    state.user.lastName = null;
    state.user.fathersName = null;
    state.user.phone = null;
    state.user.email = null;
    state.user.role = null;
    state.isAuth = false;
    state.isLoading = false;
  },
  [operations.logoutUser.rejected]: (state, { error }) => {
    state.error = error.message;
    state.isLoading = false;
  },
  [operations.logoutUser.pending]: state => {
    state.isLoading = true;
  },
};
