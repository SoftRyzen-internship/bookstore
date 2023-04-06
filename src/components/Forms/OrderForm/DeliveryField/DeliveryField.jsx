import { useState } from 'react';
import { DeliveryOptions } from '../DeliveryOptions/DeliveryOptions';

import s from './DeliveryField.module.scss';

export const DeliveryField = () => {
  const [selectedDeliveryType, setSelectedDeliveryType] = useState(
    'novaPoshtaDepartment'
  );

  const handleChangeDeliveryType = e => {
    setSelectedDeliveryType(e.target.value);
  };

  return (
    <>
      <h2 className={s.title}>Доставка та оплата</h2>
      <ul className={s.radioList}>
        <li
          className={`${s.deliveryItem} ${
            selectedDeliveryType === 'novaPoshtaDepartment' && s.active
          }`}
        >
          <div className={s.radioItem}>
            <label className={s.label}>
              <input
                type="radio"
                id="novaPoshtaDepartment"
                name="delivery"
                value="novaPoshtaDepartment"
                onChange={handleChangeDeliveryType}
                checked={selectedDeliveryType === 'novaPoshtaDepartment'}
              />
              На відділення Нової пошти
            </label>
            <span className={s.price}>65,00 грн</span>
          </div>
          <div className={s.deliveryOptions}>
            <DeliveryOptions deliveryType={selectedDeliveryType} />
          </div>
        </li>
        <li
          className={`${s.deliveryItem} ${
            selectedDeliveryType === 'novaPoshtaMailBox' && s.active
          }`}
        >
          <div className={s.radioItem}>
            <label className={s.label}>
              <input
                type="radio"
                id="novaPoshtaMailBox"
                name="delivery"
                value="novaPoshtaMailBox"
                onChange={handleChangeDeliveryType}
                checked={selectedDeliveryType === 'novaPoshtaMailBox'}
              />
              До поштомату нової почти
            </label>
            <span className={s.price}>65,00 грн</span>
          </div>
          <div className={s.deliveryOptions}>
            <DeliveryOptions deliveryType={selectedDeliveryType} />
          </div>
        </li>
        <li
          className={`${s.deliveryItem} ${
            selectedDeliveryType === 'ukrPoshta' && s.active
          }`}
        >
          <div className={s.radioItem}>
            <label className={s.label}>
              <input
                type="radio"
                id="ukrPoshta"
                name="delivery"
                value="ukrPoshta"
                onChange={handleChangeDeliveryType}
                checked={selectedDeliveryType === 'ukrPoshta'}
              />
              На відділення Укрпошти
            </label>
            <span className={s.price}>35,00 грн</span>
          </div>
          <div className={s.deliveryOptions}>
            <DeliveryOptions deliveryType={selectedDeliveryType} />
          </div>
        </li>
      </ul>
    </>
  );
};
