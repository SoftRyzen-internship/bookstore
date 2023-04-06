import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { routesPath } from 'router/routesPath';
import { toggleCart, clearCart } from 'redux/slice/slice-cart';

import { OrderItem } from 'components/OrderItem';

import s from './OrderBasket.module.scss';

const modalRoot = document.querySelector('#modal-root');

export const OrderBasket = () => {
  const isOpen = useSelector(state => state.cart.isOpen);
  const orderItems = useSelector(state => state.cart.items);

  const dispatch = useDispatch();

  const handleClickClose = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleCart());
    }
  };

  const handleClickClearCart = () => {
    dispatch(clearCart());
  };

  const orderPriceAmount = () =>
    orderItems
      ?.reduce(
        (acc, { quality, price, discount }) =>
          acc + quality * (price - (price * discount) / 100),
        0
      )
      .toFixed(2) + ' грн.';

  const orderItemsAmount = () =>
    orderItems?.reduce((acc, { quality }) => acc + quality, 0) + ' шт.';

  return createPortal(
    isOpen && (
      <div onClick={handleClickClose} className={s.backdrop}>
        <div className={s.wrapper}>
          <div className={s.orderDetailsWrapper}>
            <div className={s.titleWrapper}>
              <h3>Кошик</h3>
              <button
                onClick={handleClickClose}
                className={s.closeBtn}
                aria-label="Close basket"
              ></button>
            </div>
            {orderItems.length > 0 && (
              <div className={s.orderInfoWrapper}>
                <span>{orderItemsAmount() || '0 шт.'}</span>
                <button onClick={handleClickClearCart}>Видалити все</button>
              </div>
            )}
            {orderItems.length > 0 ? (
              <ul className={s.orderList}>
                {orderItems.map(item => (
                  <OrderItem key={item._id} orderData={item} />
                ))}
              </ul>
            ) : (
              <p className={s.emptyBasket}>Кошик порожній</p>
            )}
          </div>
          {orderItems.length > 0 && (
            <div className={s.orderLinkWrapper}>
              <div className={s.orderPrice}>
                <span>Всього</span>
                <span>{orderPriceAmount() || '0 грн.'}</span>
              </div>
              <Link
                onClick={handleClickClose}
                className={s.orderLink}
                to={routesPath.ORDER}
              >
                Перейти до оформлення замовлення
              </Link>
            </div>
          )}
        </div>
      </div>
    ),
    modalRoot
  );
};
