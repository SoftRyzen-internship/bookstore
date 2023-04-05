import * as selectors from 'redux/selectors';
import { store } from 'redux/store';

export const handleError = ({ email }) => {
  const errorMsg = selectors.errorCode(store.getState()) || '';

  switch (errorMsg) {
    case 'ERR_BAD_REQUEST':
      email = `Такий Email ${email} існує`;
      break;

    default:
      email = 'Невідома помилка';
  }

  return { email };
};
