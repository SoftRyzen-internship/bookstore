export const getBooks = state => state.books.items;
export const getCountBooksOnPage = state => state.books.count;
export const getTotalCountBooks = state => state.books.total;
export const getBooksIsLoading = state => state.books.isLoading;

export const getUserRole = state => state.auth.user.role;

export const getCartItems = state => state.cart.items;
