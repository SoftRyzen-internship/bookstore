import { useFormik } from 'formik';
import { userValidationSchema } from './userValidationSchema';

import { ICONS } from 'assets/icons';
import s from './FormLogin.module.scss';
import 'react-phone-number-input/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations/operations-user';

export function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
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
        dispatch(loginUser({ ...formData }));
      } catch (error) {
        setErrors({ error: error?.response?.data?.message });
      }
    },
  });
  const {
    values: { email, password },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    setErrors,
  } = formik;

  return (
    <>
      <div className={s.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={s.inputGroupBlock}>
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
          <div className={s.wrapperLock}>
            <ICONS.LOCK className={s.iconLock} />
            <Link to="#" className={s.lockLink}>
              Забули пароль?
            </Link>
          </div>
          <div className={s.blockButton}>
            <button
              className={`${s.buttonSubmit}`}
              type="submit"
              disabled={!isValid && !dirty}
            >
              Увійти
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
