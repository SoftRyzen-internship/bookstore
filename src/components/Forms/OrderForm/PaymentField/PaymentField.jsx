import { useState } from 'react';

import s from './PaymentField.module.scss';

export const PaymentField = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState('card');

  const handleChangePaymentType = e => {
    setSelectedPaymentType(e.target.value);
  };

  return (
    <>
      <h2 className={s.title}>Спосіб оплати</h2>
      <ul className={s.radioList}>
        <li className={s.paymentItem}>
          <label
            className={`${s.label} ${
              selectedPaymentType === 'card' && s.active
            }`}
          >
            <input
              type="radio"
              id="cardPayment"
              name="payment"
              value="card"
              onChange={handleChangePaymentType}
              checked={selectedPaymentType === 'card'}
            />
            Оплата карткою
          </label>
        </li>
        <li className={s.paymentItem}>
          <label
            className={`${s.label} ${
              selectedPaymentType === 'cash' && s.active
            }`}
          >
            <input
              type="radio"
              id="cashPayment"
              name="payment"
              value="cash"
              onChange={handleChangePaymentType}
              checked={selectedPaymentType === 'cash'}
            />
            Післяоплата
          </label>
        </li>
      </ul>
    </>
  );
};
