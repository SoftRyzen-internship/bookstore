import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ICONS } from 'assets/icons';
import s from './BookCard.module.scss';

export const BookCard = ({ book }) => {
  const [favorite, setFavorite] = useState(false);
  return (
    <Link to={book._id}>
      <div className={s.container}>
        <button
          className={s.favorite}
          onClick={e => {
            e.preventDefault();
            setFavorite(!favorite);
          }}
        >
          {favorite ? (
            <ICONS.FAVORITE_ACTIVE />
          ) : (
            <ICONS.FAVORITE width={24} height={24} fill="var(--red)" />
          )}
        </button>
        <img className={s.poster} src={book.small_image} alt="book poster" />
        <p className={s.reviews}>{`${book.reviews} відгуків`}</p>
        <p className={s.title}>{book.title}</p>
        <p className={s.author}>{book.author}</p>
        <p className={s.price}>{`${book.price}.00 грн`}</p>
        <div className={s.inStock}>
          {book.inStock ? (
            <ICONS.CHECK fill="var(--accent-cl)" />
          ) : (
            <ICONS.CHECK fill="var(--gray)" />
          )}
          <p className={book.inStock ? s.inStockText : s.outOfStockText}>
            {book.inStock ? 'Є в наявності' : 'Немає в наявності'}
          </p>
        </div>
        {/* <div className={s.addButtonContainer}>
          <button className={s.addButton} onClick={(e)=>{e.preventDefault();}}>
            <ICONS.PLUS className={s.addIcon} />
            Додати до кошика
          </button>
        </div> */}
        <ul className={s.editButtonContainer}>
          <li>
            <button
              className={s.editButton}
              onClick={e => {
                e.preventDefault();
              }}
            >
              <ICONS.EDIT />
            </button>
          </li>
          <li>
            <button
              className={s.deleteButton}
              onClick={e => {
                e.preventDefault();
              }}
            >
              <ICONS.TRASH />
            </button>
          </li>
        </ul>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    _id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    small_image: PropTypes.string,
    reviews: PropTypes.string,
    inStock: PropTypes.bool,
  }),
};
