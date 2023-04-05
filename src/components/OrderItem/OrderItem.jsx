import React from 'react';
import { useDispatch } from 'react-redux';

import {
  deleteItem,
  increaseQuality,
  decreaseQuality,
} from 'redux/slice/slice-cart';

import s from './OrderItem.module.scss';

export const OrderItem = React.memo(({ orderData }) => {
  const dispatch = useDispatch();

  const handleClickDeleteItem = () => {
    dispatch(deleteItem(orderData));
  };

  const handleClickOrderAmount = e => {
    if (e.target.dataset.decrease) {
      dispatch(decreaseQuality(orderData));
    } else {
      dispatch(increaseQuality(orderData));
    }
  };

  const {
    title,
    author,
    price,
    small_image: poster,
    discount,
    quality,
  } = orderData;

  return (
    <li className={s.orderItem}>
      <div className={s.bookPoster}>
        <img width="51" height="75" src={poster} alt={title} />
        <span className={s.discount}>-{discount}%</span>
      </div>
      <div className={s.itemDetails}>
        <b>{title}</b>
        <span>{author}</span>
        <div className={s.priceWrapper}>
          <span className={s.price}>
            {price - (price * discount) / 100} грн
          </span>
          <span className={s.oldPrice}>{price} грн</span>
        </div>
      </div>
      <div className={s.itemSettings}>
        <button onClick={handleClickDeleteItem}>Видалити</button>
        <div className={s.itemCount}>
          <button
            onClick={handleClickOrderAmount}
            className={s.decrease}
            data-decrease
          ></button>
          <span className={s.count}>{quality}</span>
          <button
            onClick={handleClickOrderAmount}
            className={s.increase}
            data-increase
          ></button>
        </div>
      </div>
    </li>
  );
});

OrderItem.displayName = 'OrderItem';
