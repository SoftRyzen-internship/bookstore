export const getBooks = state => state.books.items;
export const getCountBooksOnPage = state => state.books.count;
export const getTotalCountBooks = state => state.books.total;
export const getBooksIsLoading = state => state.books.isLoading;

export const getUserRole = state => state.auth.user.role;
// CART
export const getCartItems = state => state?.cart?.items;
// AUTH
export const getIsAuth = state => state.auth.isAuth;
export const isLoading = state => state.auth.isLoading;
export const error = state => state.auth.error;
export const errorCode = state => state?.auth?.error?.code;
// USER
export const getUserFirstName = state => state.auth.user?.firstName;
export const getUserLastName = state => state.auth.user?.lastName;
export const getUserFathersName = state => state.auth.user?.fathersName;
export const getUserPhone = state => state.auth.user?.phone;
export const getUserEmail = state => state.auth.user?.email;

// {
//   auth: {
//     user: {
//       firstName: null,
//       lastName: null,
//       fathersName: null,
//       phone: null,
//       email: null,
//       role: 'buyer',
//       error: null
//     },
//     token: null,
//     error: {
//       name: 'AxiosError',
//       message: 'Request failed with status code 409',
//       stack: 'AxiosError: Request failed with status code 409\n    at settle (http://localhost:3000/bookstore/static/js/bundle.js:69793:12)\n    at XMLHttpRequest.onloadend (http://localhost:3000/bookstore/static/js/bundle.js:68376:66)',
//       code: 'ERR_BAD_REQUEST'
//     },
//     isAuth: false,
//     isLoading: false,
//     isError: true,
//     _persist: {
//       version: -1,
//       rehydrated: true
//     }
//   },
//   books: {
//     items: [],
//     count: null,
//     total: null,
//     isLoading: false,
//     error: null
//   },
//   cart: {
//     items: [],
//     _persist: {
//       version: -1,
//       rehydrated: true
//     }
//   }
// }
