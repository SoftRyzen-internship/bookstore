import { CommentsField } from './CommentsField/CommentsField';
import { DeliveryField } from './DeliveryField/DeliveryField';
import { OrderField } from './OrderField/OrderField';
import { PaymentField } from './PaymentField';

import s from './OrderForm.module.scss';

export const OrderForm = () => {
  return (
    <form className={s.wrapper}>
      <DeliveryField />
      <PaymentField />
      <CommentsField />
      <OrderField />
    </form>
  );
};
