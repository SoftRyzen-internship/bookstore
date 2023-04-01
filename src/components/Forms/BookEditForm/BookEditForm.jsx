import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { useFetch } from 'hooks/useFetch';
import { getBookDetails, updateBook } from 'services/books-api';
import { Dropdown } from 'components/Dropdown';
import { Spinner } from 'components/Spinner';
import s from './BookEditForm.module.scss';
import { routesPath } from 'router/routesPath';

export const BookEditForm = () => {
  const currentYear = new Date().getFullYear();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const backLocation = location?.state?.from;
  const backPage = backLocation?.pathname + backLocation?.search;

  const { data, loading } = useFetch(() => getBookDetails(id), []);

  const initialValues = {
    title: '',
    author: '',
    type: '',
    book_year: currentYear,
    book_page_count: '',
    description: '',
    small_image: '',
    big_image: '',
    price: '',
    discount: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        const book = {
          title: values.title,
          author: values.author,
          book_year: Number(values.book_year),
          book_page_count: Number(values.book_page_count),
          small_image: values.small_image,
          big_image: values.big_image,
          price: Number(values.price - values.discount),
        };
        await updateBook(id, book);
        backPage ? navigate(backPage) : navigate(routesPath.HOME);
      } catch (error) {
        setError(error.message);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    isValid,
    isSubmitting,
    dirty,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
  } = formik;

  const yearList = useMemo(() => {
    const years = [];
    for (let year = currentYear; year > currentYear - 200; year--) {
      years.push({
        value: year,
        label: year.toString(),
      });
    }
    return years;
  }, [currentYear]);

  useEffect(() => {
    if (data) {
      setValues({
        title: data.title,
        author: data.author,
        type: '',
        book_year: currentYear,
        book_page_count: data.book_page_count,
        description: data.description,
        small_image: data.small_image,
        big_image: data.big_image,
        price: data.price,
        discount: 0,
      });
    }

    // eslint-disable-next-line
  }, [data]);

  return loading ? (
    <Spinner />
  ) : (
    <form onSubmit={handleSubmit} className={s.form}>
      <ul className={s.inputsList}>
        <li>
          <label className={s.inputLabel}>
            <p>
              Вкажіть назву книги<span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <input
              className={s.input}
              name="title"
              placeholder=""
              value={values.title}
              onChange={handleChange}
            />
            {touched && errors.title && (
              <p className={s.errorMsg}>{errors.title}</p>
            )}
          </label>
        </li>

        <li>
          <label className={s.inputLabel}>
            <p>
              Вкажіть автора<span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <input
              className={s.input}
              name="author"
              placeholder=""
              value={values.author}
              onChange={handleChange}
            />
            {touched && errors.author && (
              <p className={s.errorMsg}>{errors.author}</p>
            )}
          </label>
        </li>

        <li>
          <ul className={s.smallInputList}>
            <li>
              <label className={s.smallInputLabel}>
                <p>Виберіть тип видання</p>
                <Dropdown
                  options={[
                    {
                      label: 'Паперова',
                      value: 'paper',
                    },
                  ]}
                  placeHolder=""
                  onChange={({ value }) => {
                    setFieldValue('type', value);
                  }}
                />
                {touched && errors.type && (
                  <p className={s.errorMsg}>{errors.type}</p>
                )}
              </label>
            </li>
            <li>
              <label className={s.smallInputLabel}>
                <p>
                  Виберіть рік видання
                  <span style={{ color: 'var(--red)' }}>*</span>
                </p>
                <Dropdown
                  options={yearList}
                  isSearchable
                  placeHolder={currentYear.toString()}
                  onChange={({ value }) => {
                    setFieldValue('book_year', value);
                  }}
                />
                {touched && errors.book_year && (
                  <p className={s.errorMsg}>{errors.book_year}</p>
                )}
              </label>
            </li>
            <li>
              <label className={s.smallInputLabel}>
                <p>
                  Вкажіть кількість стрінок
                  <span style={{ color: 'var(--red)' }}>*</span>
                </p>
                <input
                  className={s.input}
                  name="book_page_count"
                  placeholder=""
                  value={values.book_page_count}
                  onChange={handleChange}
                />
                {touched && errors.book_page_count && (
                  <p className={s.errorMsg}>{errors.book_page_count}</p>
                )}
              </label>
            </li>
          </ul>
        </li>

        <li>
          <label className={s.textareaLabel}>
            <p>
              Опис товар
              <span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <textarea
              className={s.textarea}
              name="description"
              placeholder=""
              value={values.description}
              onChange={handleChange}
            />
            {touched && errors.description && (
              <p className={s.errorMsg}>{errors.description}</p>
            )}
          </label>
        </li>

        <li>
          <label className={s.inputLabel}>
            <p>
              Вкажіть URL зображення картки товару
              <span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <input
              className={s.input}
              name="small_image"
              placeholder=""
              value={values.small_image}
              onChange={handleChange}
            />
            {touched && errors.small_image && (
              <p className={s.errorMsg}>{errors.small_image}</p>
            )}
          </label>
          <img className={s.image} src={values.small_image} alt="book poster" />
        </li>

        <li>
          <label className={s.inputLabel}>
            <p>
              Вкажіть URL зображення постеру товару
              <span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <input
              className={s.input}
              name="big_image"
              placeholder=""
              value={values.big_image}
              onChange={handleChange}
            />
            {touched && errors.big_image && (
              <p className={s.errorMsg}>{errors.big_image}</p>
            )}
          </label>
          <img
            className={s.image}
            src={values.big_image}
            alt="book big poster"
          />
        </li>

        <li>
          <ul className={s.smallInputList}>
            <li>
              <label className={s.smallInputLabel}>
                <p>
                  Вкажіть ціну, в грн
                  <span style={{ color: 'var(--red)' }}>*</span>
                </p>
                <input
                  className={s.input}
                  name="price"
                  placeholder=""
                  value={values.price}
                  onChange={handleChange}
                />
                {touched && errors.price && (
                  <p className={s.errorMsg}>{errors.price}</p>
                )}
              </label>
            </li>
            <li>
              <label className={s.smallInputLabel}>
                <p>
                  Вкажіть знижку, в грн
                  <span style={{ color: 'var(--red)' }}>*</span>
                </p>
                <input
                  className={s.input}
                  name="discount"
                  placeholder=""
                  value={values.discount}
                  onChange={handleChange}
                />
                {!isValid && touched && errors.discount && (
                  <p className={s.errorMsg}>{errors.discount}</p>
                )}
              </label>
            </li>

            <li>
              {Number(values.price) ? (
                <label className={s.smallInputLabel}>
                  Кінцева ціна
                  <p className={s.price}>
                    {Number(values.price) -
                      (Number(values.discount) ? Number(values.discount) : 0) +
                      ' грн'}
                  </p>
                </label>
              ) : (
                <label className={s.smallInputLabel}></label>
              )}
            </li>
          </ul>
        </li>
      </ul>
      {error && <p className={s.submitErrorMsg}>{error}</p>}
      <button
        className={s.button}
        type="submit"
        disabled={!isValid || !dirty || isSubmitting}
      >
        Зберегти
      </button>
    </form>
  );
};
