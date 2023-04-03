import { useCallback, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { addBook } from 'services/books-api';
import { Dropdown } from 'components/Dropdown';
import { Spinner } from 'components/Spinner';
import { ImgBookFormList } from 'components/ImgBookFormList';
import s from './BookAddForm.module.scss';

export const BookAddForm = () => {
  const currentYear = new Date().getFullYear();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    title: '',
    author: '',
    type: '',
    book_year: '',
    book_page_count: '',
    description: '',
    small_image: '',
    big_image: '',
    media_gallery_image: [],
    price: '',
    discount: '',
    gallery_image: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        const book = {
          title: values.title,
          author: values.author,
          book_year: Number(values.book_year),
          book_page_count: Number(values.book_page_count),
          description: values.description,
          small_image: values.small_image,
          big_image: values.big_image,
          media_gallery_image: values.media_gallery_image,
          price: Number(values.price - values.discount),
        };
        setIsLoading(true);
        await addBook(book);
        setIsLoading(false);
        actions.setSubmitting(false);
        actions.resetForm({
          values: initialValues,
        });
      } catch (error) {
        setIsLoading(false);
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
    handleBlur,
    setFieldValue,
    setFieldTouched,
  } = formik;

  const yearList = useMemo(() => {
    const years = [];
    for (let year = currentYear; year > currentYear - 200; year--) {
      years.push({
        value: year.toString(),
        label: year.toString(),
      });
    }
    return years;
  }, [currentYear]);

  const handleDeleteGalleryItem = useCallback(
    item => {
      const { media_gallery_image } = values;

      const updatedGallery = [...media_gallery_image].filter(
        img => img !== item
      );

      setFieldValue('media_gallery_image', updatedGallery);
    },

    [setFieldValue, values]
  );

  const handleAddGalleryItem = item => {
    const { media_gallery_image } = values;

    const updatedGallery = [...media_gallery_image, item];

    setFieldValue('media_gallery_image', updatedGallery);
    setFieldValue('gallery_image', '');
  };

  return isLoading ? (
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
              className={`${s.input} ${
                touched.title && (errors.title ? s.inputError : s.inputValid)
              }`}
              id="title"
              name="title"
              placeholder=""
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.title && errors.title && (
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
              className={`${s.input} ${
                touched.author && (errors.author ? s.inputError : s.inputValid)
              }`}
              name="author"
              placeholder=""
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.author && errors.author && (
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
                  className={
                    touched.type && (errors.type ? s.inputError : s.inputValid)
                  }
                  options={[
                    {
                      label: 'Паперова',
                      value: 'paper',
                    },
                  ]}
                  placeHolder=""
                  onClick={() => setFieldTouched('type', true)}
                  onChange={({ value }) => {
                    setFieldValue('type', value);
                    touched.type = true;
                  }}
                />
                {touched.type && errors.type && (
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
                  className={
                    touched.book_year &&
                    (errors.book_year ? s.inputError : s.inputValid)
                  }
                  options={yearList}
                  isSearchable
                  onClick={() => setFieldTouched('book_year', true)}
                  onChange={({ value }) => {
                    setFieldValue('book_year', value);
                    touched.book_year = true;
                  }}
                />
                {touched.book_year && errors.book_year && (
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
                  className={`${s.input} ${
                    touched.book_page_count &&
                    (errors.book_page_count ? s.inputError : s.inputValid)
                  }`}
                  name="book_page_count"
                  placeholder=""
                  value={values.book_page_count}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.book_page_count && errors.book_page_count && (
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
              className={`${s.textarea} ${
                touched.description &&
                (errors.description ? s.inputError : s.inputValid)
              }`}
              name="description"
              placeholder=""
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.description && errors.description && (
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
              className={`${s.input} ${
                touched.small_image &&
                (errors.small_image ? s.inputError : s.inputValid)
              }`}
              name="small_image"
              placeholder=""
              value={values.small_image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.small_image && errors.small_image && (
              <p className={s.errorMsg}>{errors.small_image}</p>
            )}
          </label>
          {touched.small_image && !errors.small_image && (
            <img
              className={s.image}
              src={values.small_image}
              alt="book poster"
            />
          )}
        </li>

        <li>
          <label className={s.inputLabel}>
            <p>
              Вкажіть URL зображення постеру товару
              <span style={{ color: 'var(--red)' }}>*</span>
            </p>
            <input
              className={`${s.input} ${
                touched.big_image &&
                (errors.big_image ? s.inputError : s.inputValid)
              }`}
              name="big_image"
              placeholder=""
              value={values.big_image}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.big_image && errors.big_image && (
              <p className={s.errorMsg}>{errors.big_image}</p>
            )}
          </label>
          {touched.big_image && !errors.big_image && (
            <img
              className={s.image}
              src={values.big_image}
              alt="book big poster"
            />
          )}
        </li>

        <li>
          <div className={s.galleryContainer}>
            <p>Додайте URL зображення для галереї</p>
            <div className={s.galleryInputContainer}>
              <label className={s.inputLabel}>
                <input
                  className={`${s.input} ${
                    touched.gallery_image &&
                    (errors.gallery_image ? s.inputError : s.inputValid)
                  }`}
                  name="gallery_image"
                  placeholder=""
                  value={values.gallery_image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.gallery_image && errors.gallery_image && (
                  <p className={s.errorMsg}>{errors.gallery_image}</p>
                )}
              </label>
              <button
                type="button"
                className={s.addButton}
                disabled={errors.gallery_image}
                onClick={() => {
                  handleAddGalleryItem(values.gallery_image);
                }}
              >
                Додати
              </button>
            </div>
            {touched.media_gallery_image && errors.media_gallery_image && (
              <p className={s.errorMsg}>{errors.media_gallery_image}</p>
            )}
            {values.media_gallery_image && (
              <ImgBookFormList
                list={values.media_gallery_image}
                onDelete={handleDeleteGalleryItem}
              />
            )}
          </div>
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
                  className={`${s.input} ${
                    touched.price &&
                    (errors.price ? s.inputError : s.inputValid)
                  }`}
                  name="price"
                  placeholder=""
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.price && errors.price && (
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
                  className={`${s.input} ${
                    touched.discount &&
                    (errors.discount ? s.inputError : s.inputValid)
                  }`}
                  name="discount"
                  placeholder=""
                  value={values.discount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.discount && errors.discount && (
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
