import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("пароль є обов'язковим")
    .min(6, 'пароль не менше 6 символів'),
  newPassword: Yup.string()
    .required("Новий пароль є обов'язковим")
    .min(6, 'Новий пароль не менше 6 символів'),
  confirmNewPassword: Yup.string()
    .required('Підтвердіть пароль')
    .oneOf([Yup.ref('newPassword'), null], 'Паролі не співпадають'),
  error: Yup.string(),
});
