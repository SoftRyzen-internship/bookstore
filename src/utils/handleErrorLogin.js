import * as selectors from 'redux/selectors';
import { store } from 'redux/store';

export const handleErrorLogin = ({ email, password }) => {
  const errorMsg = selectors.errorCode(store.getState()) || '';
  const errors = {};

  if (!email || !password) {
    errors.email = 'Email або пароль невірні';
    errors.password = 'Email або пароль невірні';
  } else if (errorMsg === 'ERR_BAD_REQUEST') {
    errors.email = 'Email або пароль невірні';
    errors.password = 'Email або пароль невірні';
  } else {
    errors.email = 'Невідома помилка для поля email';
    errors.password = 'Невідома помилка для поля password';
  }

  return errors;
};

export const handleErrorChange = ({ email }) => {
  const errorMsg = selectors.errorCode(store.getState()) || '';
  const errors = {};

  if (!email) {
    errors.email = `Такий Email ${email} існує`;
  } else if (errorMsg === 'ERR_BAD_REQUEST') {
    errors.email = `Такий Email ${email} існує`;
  } else {
    errors.email = 'Невідома помилка для поля email';
  }

  return errors;
};
