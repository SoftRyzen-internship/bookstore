import { ICONS } from 'assets/icons';
import React from 'react';
import { formatPhoneNumber } from 'utils';
import s from './ContactInfo.module.scss';

export const ContactInfo = () => {
  return (
    <div className={s.container}>
      <a href="tel:+800123456789" className={s.phoneLink}>
        <ICONS.CALL className={s.icon} />
        <p className={s.number}>{formatPhoneNumber('+800123456789')} </p>
      </a>
      <p className={s.text}>Без вихідних, з 8 до 20</p>
    </div>
  );
};
