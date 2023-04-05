import * as Yup from 'yup';

const emailRegexp =
  /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]/;

export const userValidationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, 'Введіть коректний email address')
    .required('Email є обов`язковим'),
  password: Yup.string()
    .required("Пароль є обов'язковим")
    .min(6, 'Пароль повинен бути не менше 6 символів'),
});
