import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .required('Назва книги є обов`язковим полем')
    .max(32, 'Назва книги має містити не більше 32 символів'),

  author: Yup.string()
    .required('Автор книги є обов`язковим полем')
    .max(32, 'Автор книги має містити не більше 32 символів'),

  type: Yup.string().oneOf(['', 'paper'], 'Не вірний тип'),

  book_year: Yup.number()
    .required('Рік видиння є обов`язковим')
    .test(
      'year',
      'Не вірний формат',
      val => val && val.toString().length === 4
    ),

  book_page_count: Yup.string()
    .required('Кількість сторінок обов`язкова')
    .test(
      'count',
      'Ціле число від 10 до 1500',
      val =>
        !isNaN(Number(val)) &&
        /^\d+$/.test(val) &&
        Number(val) >= 10 &&
        Number(val) <= 1500
    ),

  description: Yup.string()
    .required('Опис є обов`язковим полем')
    .max(5000, 'Опис має містити не більше 5000 символів'),

  small_image: Yup.string()
    .matches(
      /^[\S]+[\S\s]*[\S]+$/,
      'Поле не може починатися або закінчуватися пробілом'
    )
    .url('Будь-ласка введіть валідний URL')
    .matches(/^.{10,}$/, 'URL має містити не менше 10 символів')
    .matches(
      /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|JPG|JPEG|PNG)$/,
      'Зображення має бути jpg, jpeg, png формату '
    )
    .required('URL зображення картки товару є обов`язковим'),
  big_image: Yup.string()
    .matches(
      /^[\S]+[\S\s]*[\S]+$/,
      'Поле не може починатися або закінчуватися пробілом'
    )
    .url('Будь-ласка введіть валідний URL')
    .matches(/^.{10,}$/, 'URL має містити не менше 10 символів')
    .matches(
      /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|JPG|JPEG|PNG)$/,
      'Зображення має бути jpg, jpeg, png формату '
    )
    .required('Постер є обов`язковим'),
  price: Yup.string()
    .required('Ціна товару обов`язкова')
    .test(
      'price',
      'Число від 1 до 5000',
      val => !isNaN(Number(val)) && Number(val) >= 1 && Number(val) <= 5000
    ),
  discount: Yup.string().test(
    'discount',
    'Число від 0 до 100',
    val => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100
  ),
  gallery_image: Yup.string()
    .matches(
      /^[\S]+[\S\s]*[\S]+$/,
      'Поле не може починатися або закінчуватися пробілом'
    )
    .url('Будь-ласка введіть валідний URL')
    .matches(/^.{10,}$/, 'URL має містити не менше 10 символів')
    .matches(
      /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|JPG|JPEG|PNG)$/,
      'Зображення має бути jpg, jpeg, png формату '
    ),
});
