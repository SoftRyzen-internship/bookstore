import s from './OrderTableRow.module.scss';

export const OrderTableRow = ({ orderData }) => {
  const {
    title,
    author,
    price,
    small_image: poster,
    discount,
    quality,
    book_year,
  } = orderData;

  return (
    <tr className={s.orderItem}>
      <td className={s.posterWrapper}>
        <img
          className={s.bookPoster}
          src={poster}
          width="53"
          height="78"
          alt={title}
        />
      </td>
      <td>
        <p className={s.bold}>{title}</p>
        <p>{author}</p>
        <p>{book_year}</p>
      </td>
      <td>
        <p>Ціна за од.</p>
        <p className={s.bold}>{price} грн</p>
      </td>
      <td>
        <p>Кількість</p>
        <p className={s.bold}>{quality}</p>
      </td>
      <td>
        <p>Знижка</p>
        <p className={s.bold}>{discount}%</p>
      </td>
      <td>
        <p>Кінцева ціна</p>
        <p className={s.bold}>
          {(quality * (price - (price * discount) / 100)).toFixed(2)} грн
        </p>
      </td>
    </tr>
  );
};
