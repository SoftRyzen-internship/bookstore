import { CommentsField } from './CommentsField/CommentsField';
import { DeliveryField } from './DeliveryField/DeliveryField';
import { OrderField } from './OrderField/OrderField';
import { PaymentField } from './PaymentField/PaymentField';
import { forwardRef } from 'react';
import s from './OrderForm.module.scss';

export const OrderForm = forwardRef(({ handleSubmit }, formRef) => {
  return (
    <>
      <form className={s.wrapper} onSubmit={handleSubmit} ref={formRef}>
        <DeliveryField />
        <PaymentField />
        <CommentsField />
        <OrderField />
      </form>
    </>
  );
});
