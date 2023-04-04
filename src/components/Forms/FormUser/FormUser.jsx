import { useFormik } from 'formik';
import { userValidationSchema } from './userValidationSchema';
import { useLocation, useNavigate } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import s from './FormUser.module.scss';
import 'react-phone-number-input/style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeUser, currentUser } from 'redux/operations/operations-user';

export function FormUser() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      fathersName: '',
      email: '',
      phone: '',
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
        dispatch(changeUser({ ...formData }));
      } catch (error) {
        setErrors({ error: error?.response?.data?.message });
      }
    },
  });
  const {
    values: { firstName, lastName, fathersName, email, phone },
    errors,
    touched,
    isValid,
    dirty,
    handleBlur,
    handleChange,
    setFieldValue,
    handleSubmit,
    resetForm,
    setErrors,
    setValues,
  } = formik;
  useEffect(() => {
    async function getUser() {
      try {
        const data = await dispatch(currentUser());

        const getValueFromNestedObject = (obj, key) => {
          if (!obj) return undefined;
          if (obj.hasOwnProperty(key)) return obj[key];
          for (let k in obj) {
            if (typeof obj[k] === 'object') {
              const result = getValueFromNestedObject(obj[k], key);
              if (result !== undefined) return result;
            }
          }
          return undefined;
        };

        const email = getValueFromNestedObject(data, 'email') || '';
        const firstName = getValueFromNestedObject(data, 'firstName') || '';
        const lastName = getValueFromNestedObject(data, 'lastName') || '';
        const fathersName = getValueFromNestedObject(data, 'fathersName') || '';
        const phone = getValueFromNestedObject(data, 'phone') || '';

        setValues({ email, firstName, lastName, fathersName, phone });
      } catch (error) {
        console.error(error);
      }
    }

    getUser();
  }, [dispatch, setValues]);

  const navigate = useNavigate();
  const location = useLocation();
  const handleChangePhone = value => {
    setFieldValue('phone', value);
  };

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
            <span className={s.titleForm}>Особисті дані</span>
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
          </div>
        </form>
      </div>
    </>
  );
}
