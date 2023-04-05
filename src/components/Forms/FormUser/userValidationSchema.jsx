import * as Yup from 'yup';

const emailRegexp =
  /^[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+(?:\.[-!#$%&'*+/=?^_`{|}~A-Za-z0-9]+)*@([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]/;

export const userValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, 'Ім`я повинно бути не більше 20 символів')
    .required('Введіть ваше ім`я'),
  lastName: Yup.string()
    .max(20, 'Прізвище повинно бути не більше 20 символів')
    .required('Введіть ваше прізвище'),
  fathersName: Yup.string()
    .max(20, 'По батькові повинно бути не більше 20 символів')
    .required('Введіть ваше по батькові'),
  email: Yup.string()
    .matches(emailRegexp, 'Введіть коректний email address')
    .required('Email є обов`язковим'),
  phone: Yup.string()
    .required('Телефон є обов`язковим')
    .max(20, 'Номер повинен бути не більше 20 символів'),
});
