import { useFormik } from 'formik';
import { userValidationSchema } from './userValidationSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ICONS } from 'assets/icons';
import s from './FormPassword.module.scss';
import 'react-phone-number-input/style.css';
import { updatePassword } from 'services/sendFormData';

export function FormPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: userValidationSchema,
    onSubmit: async values => {
      try {
        const formData = {
          oldPassword: values.oldPassword,
          newPassword: values.newPassword,
        };
        await updatePassword(formData);
      } catch (error) {
        setErrors({ error: error?.response?.data?.message });
      }
    },
  });
  const {
    values: { oldPassword, newPassword, confirmNewPassword },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    setErrors,
  } = formik;
  const navigate = useNavigate();
  const location = useLocation();

  const handleCancel = () => {
    resetForm();
    if (location.state?.from) {
      navigate(-1);
    } else {
      navigate('/books');
    }
  };
  return (
    <>
      <div className={s.formWrapper}>
        <form onSubmit={handleSubmit}>
          <div className={s.blockButton}>
            <span className={s.titleForm}>Змінити пароль</span>
            <div>
              <button
                className={`${s.buttonSubmit} ${s.buttonSubmitGap}`}
                type="submit"
                disabled={!isValid && !dirty}
              >
                Змінити дані
              </button>
              <button
                className={s.buttonCancel}
                type="button"
                onClick={handleCancel}
              >
                Вийти
              </button>
            </div>
          </div>
          <div className={s.inputGroupBlock}>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="oldPassword">
                Старий пароль
              </label>
              <input
                className={s.input}
                type={showPassword ? 'text' : 'password'}
                name="oldPassword"
                id="oldPassword"
                placeholder="Старий пароль"
                value={oldPassword}
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
              {errors.oldPassword && touched.oldPassword && (
                <small className={s.errorInput}>
                  {errors.oldPassword} {errors.error}
                </small>
              )}
              {errors.error && (
                <small className={s.errorInput}>{errors.error}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="newPassword">
                Новий пароль
              </label>
              <input
                className={s.input}
                type={showPassword ? 'text' : 'password'}
                name="newPassword"
                id="newPassword"
                placeholder="Новий пароль"
                value={newPassword}
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
              {errors.newPassword && touched.newPassword && (
                <small className={s.errorInput}>{errors.newPassword}</small>
              )}
            </div>
            <div className={s.inputGroup}>
              <label className={s.inputLabel} htmlFor="confirmNewPassword">
                Повторіть новий пароль
              </label>
              <input
                className={s.input}
                type={showPassword ? 'text' : 'password'}
                name="confirmNewPassword"
                id="confirmNewPassword"
                placeholder="Повторіть новий пароль"
                value={confirmNewPassword}
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
              {errors.confirmNewPassword && touched.confirmNewPassword && (
                <small className={s.errorInput}>
                  {errors.confirmNewPassword}
                </small>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
