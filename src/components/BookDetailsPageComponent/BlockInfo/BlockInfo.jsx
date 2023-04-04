import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from 'redux/slice/slice-cart';
import * as selectors from 'redux/selectors';
import * as actions from 'redux/slice/slice-books';
import { userRoles } from 'constants/userRoles';
import { routesPath } from 'router/routesPath';
import { deleteBook } from 'services/books-api';
import { ICONS } from 'assets/icons';
import { SpinnerButton } from 'components/SpinnerButton';

import s from './BlockInfo.module.scss';

export const BlockInfo = ({ data }) => {
  const userRole = useSelector(selectors.getUserRole);
  const dispatch = useDispatch();

  const [favorite, setFavorite] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location?.state;
  const backPage = state?.from?.pathname + state?.from?.search;
  const count = state?.count;

  const decreasePathPage = path => {
    const currentPage = parseInt(path.match(/page=(\d+)/)[1]);
    return path.replace(
      /page=\d+/,
      `page=${currentPage === 1 ? currentPage : currentPage - 1}`
    );
  };

  const handleEdit = () => {
    navigate(routesPath.BOOK_EDIT, {
      state: { from: location },
    });
  };

  const handleDelete = async e => {
    try {
      setIsDeleting(true);
      const response = await deleteBook(data._id);
      setIsDeleting(false);
      if (response.status === 200) {
        dispatch(actions.decreaseCount());
        if (backPage) {
          count === 1
            ? navigate(decreasePathPage(backPage))
            : navigate(backPage);
        } else {
          navigate(routesPath.HOME);
        }
      }
    } catch (error) {
      setIsDeleting(false);
      console.log(error.message);
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>{data.title}</p>
      <div className={s.wrapper}>
        <p className={s.author}>{data.author}</p>
        <p className={s.reviews}>{`${
          data.reviews ? data.reviews : 0
        } відгуків`}</p>
      </div>
      <div className={s.tabs}>
        <button type="button" className={s.activeTab}>
          Паперова книга
        </button>
        <button type="button" className={s.disableTab}>
          Електронна книга
        </button>
      </div>
      <div className={s.detailsWrapper}>
        <div className={s.buyWrapper}>
          <p className={s.price}>{`${data.price}.00 грн`}</p>
          {userRole === userRoles.BUYER && (
            <button
              type="button"
              className={s.buyButton}
              onClick={() => {
                dispatch(setItem(data));
              }}
            >
              <ICONS.CART_FULL />
              Купити
            </button>
          )}
        </div>
        <div className={s.favoriteWrapper}>
          <button
            type="button"
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
      {userRole === userRoles.ADMIN && (
        <ul className={s.editButtonContainer}>
          <li>
            <button type="button" className={s.editButton} onClick={handleEdit}>
              <ICONS.EDIT />
              Редагувати
            </button>
          </li>
          <li>
            <button
              type="button"
              className={s.deleteButton}
              onClick={handleDelete}
            >
              {isDeleting ? (
                <SpinnerButton />
              ) : (
                <>
                  <ICONS.TRASH />
                  Видалити
                </>
              )}
            </button>
          </li>
        </ul>
      )}
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
