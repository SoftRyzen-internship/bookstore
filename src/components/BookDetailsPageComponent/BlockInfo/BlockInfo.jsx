import { useState } from 'react';
import PropTypes from 'prop-types';
import { ICONS } from 'assets/icons';
import s from './BlockInfo.module.scss';

export const BlockInfo = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <div className={s.container}>
      <p className={s.title}>{data.title}</p>
      <div className={s.wrapper}>
        <p className={s.author}>{data.author}</p>
        <p className={s.reviews}>{`${data.reviews} відгуків`}</p>
      </div>
      <div className={s.tabs}>
        <button className={s.activeTab}>Паперова книга</button>
        <button className={s.disableTab}>Електронна книга</button>
      </div>
      <div className={s.detailsWrapper}>
        <div className={s.buyWrapper}>
          <p className={s.price}>{`${data.price}.00 грн`}</p>
          <button className={s.buyButton}>
            <ICONS.CART_FULL />
            Купити
          </button>
        </div>
        <div className={s.favoriteWrapper}>
          <button
            className={s.favoriteBtn}
            onClick={() => setFavorite(!favorite)}
          >
            {favorite ? (
              <ICONS.FAVORITE_ACTIVE />
            ) : (
              <ICONS.FAVORITE width={24} height={24} fill="var(--red)" />
            )}
          </button>
          <p className={s.favoriteText}>Додати в обране</p>
        </div>
        <ul className={s.detailsList}>
          <li className={s.detailsItem}>
            <p className={s.text}>Рік видання:</p>
            <p className={s.value}>{data.book_year}</p>
          </li>
          <li className={s.detailsItem}>
            <p className={s.text}>Кількість сторінок:</p>
            <p className={s.value}>{data.book_page_count}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

BlockInfo.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    small_image: PropTypes.string,
    reviews: PropTypes.string,
    inStock: PropTypes.bool,
    price: PropTypes.number,
  }),
};
