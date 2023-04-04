import { useFormik } from 'formik';
import { userValidationSchema } from './userValidationSchema';
import { registerUser } from 'services/sendFormData';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import { ICONS } from 'assets/icons';
import s from './FormRegistration.module.scss';
import 'react-phone-number-input/style.css';
import { useState } from 'react';

export function FormRegistration() {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      fathersName: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: userValidationSchema,

    onSubmit: async values => {
      try {
        const formData = Object.keys(values).reduce((acc, key) => {
          if (values[key]) {
            acc[key] = values[key];
          }
          return acc;
        }, {});
        await registerUser({ ...formData });
      } catch (error) {
        setErrors({ error: error?.response?.data?.message });
      }
    },
  });
  const {
    values: { firstName, lastName, fathersName, email, phone, password },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    setErrors,
  } = formik;

  const handleChangePhone = value => {
    setFieldValue('phone', value);
  };

  return (
    <>
      <div className={s.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={s.inputGroupBlock}>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="firstName">
                Ім`я
              </label>
              <input
                className={s.input}
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Ім`я"
                value={firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <small className={s.errorInput}>{errors.firstName}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="lastName">
                Прізвище
              </label>
              <input
                className={s.input}
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Прізвище"
                value={lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <small className={s.errorInput}>{errors.lastName}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="fathersName">
                По батькові
              </label>
              <input
                className={s.input}
                type="text"
                name="fathersName"
                id="fathersName"
                placeholder="По батькові"
                value={fathersName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fathersName && touched.fathersName && (
                <small className={s.errorInput}>{errors.fathersName}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="phone">
                Телефон
              </label>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                className={s.input}
                defaultCountry="UA"
                name="phone"
                id="phone"
                placeholder="Телефон"
                value={phone}
                onChange={handleChangePhone}
                onBlur={handleBlur}
                error={
                  phone
                    ? isValidPhoneNumber(phone)
                      ? undefined
                      : 'Invalid phone number'
                    : 'Phone number required'
                }
              />
              {errors.phone && touched.phone && (
                <small className={s.errorInput}>{errors.phone}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="email">
                Email
              </label>
              <input
                className={s.input}
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <small className={s.errorInput}>{errors.email}</small>
              )}
              {errors.error && (
                <small className={s.errorInput}>{errors.error}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="password">
                Пароль
              </label>
              <input
                className={s.input}
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Старий пароль"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={s.showPasswordButton}
              >
                {showPassword ? (
                  <ICONS.SHOWPASS className={s.iconShow} />
                ) : (
                  <ICONS.CLOSEPASS className={s.iconClose} />
                )}
              </button>
              {errors.password && touched.password && (
                <small className={s.errorInput}>
                  {errors.password} {errors.error}
                </small>
              )}
              {errors.error && (
                <small className={s.errorInput}>{errors.error}</small>
              )}
            </div>
          </div>
          <div className={s.blockButton}>
            <button
              className={`${s.buttonSubmit} ${s.buttonSubmitGap}`}
              type="submit"
              disabled={!isValid && !dirty}
            >
              Зберегти
            </button>

            <div className={s.wrapperCheckbox}>
              <input
                className={s.inputCheckbox}
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  setIsChecked(prev => !prev);
                }}
              />
              <button
                type="button"
                onClick={() => setIsChecked(prev => !prev)}
                className={s.iconCheckbox}
              >
                {isChecked ? <ICONS.CHECKED /> : <ICONS.DEFAULT_CHECKED />}
              </button>
              <label htmlFor="checkbox" className={s.checkboxLabel}>
                Створити обліковий запис
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
