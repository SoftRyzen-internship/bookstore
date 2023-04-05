import { OrderTableRow } from 'components/OrderTableRow/OrderTableRow';
import { useSelector } from 'react-redux';

import s from './OrderField.module.scss';

export const OrderField = () => {
  const orderItems = useSelector(state => state.cart.items);

  return (
    <>
      <h2 className={s.title}>Ваше замовлення</h2>
      {orderItems.length > 0 ? (
        <table className={s.orderTable}>
          <tbody>
            {orderItems.map(item => (
              <OrderTableRow key={item._id} orderData={item} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className={s.emptyBasket}>Кошик порожній</p>
      )}
    </>
  );
};
