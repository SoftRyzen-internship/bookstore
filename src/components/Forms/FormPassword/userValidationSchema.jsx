import * as Yup from 'yup';

export const userValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required("Поточний пароль є обов'язковим")
    .min(6, 'Поточний пароль повинен містити щонайменше 6 символів'),
  newPassword: Yup.string()
    .required("Новий пароль є обов'язковим")
    .min(6, 'Новий пароль повинен містити щонайменше 6 символів'),
  confirmNewPassword: Yup.string()
    .required("Підтвердження нового пароля є обов'язковим")
    .oneOf([Yup.ref('newPassword'), null], 'Паролі не співпадають'),
  error: Yup.string(),
});
