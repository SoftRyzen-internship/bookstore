import * as operations from '../operations/operations-books';

export const getBooks = {
  [operations.getBooks.fulfilled]: (state, { payload }) => {
    state.isLoading = false;
    state.items = payload.books;
    state.count = payload.count;
    state.total = payload.total;
  },
  [operations.getBooks.rejected]: (state, { error }) => {
    state.error = error;
    state.isLoading = false;
  },
  [operations.getBooks.pending]: state => {
    state.isLoading = true;
  },
};

export const addBook = {
  [operations.addBook.fulfilled]: state => {
    state.isLoading = false;
  },
  [operations.addBook.rejected]: (state, { error }) => {
    state.error = error;
    state.isLoading = false;
  },
  [operations.addBook.pending]: state => {
    state.isLoading = true;
  },
};

export const updateBook = {
  [operations.updateBook.fulfilled]: state => {
    state.isLoading = false;
  },
  [operations.updateBook.rejected]: (state, { error }) => {
    state.error = error;
    state.isLoading = false;
  },
  [operations.updateBook.pending]: state => {
    state.isLoading = true;
  },
};

export const deleteBook = {
  [operations.deleteBook.fulfilled]: state => {
    state.isLoading = false;
  },
  [operations.deleteBook.rejected]: (state, { error }) => {
    state.error = error;
    state.isLoading = false;
  },
  [operations.deleteBook.pending]: state => {
    state.isLoading = true;
  },
};
