import { ICONS } from 'assets/icons';
import React from 'react';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={s.container}>
      <ICONS.LOGO />
      <div className={s.wrapper}>
        <p className={s.text}>Книгарня</p>
        <p className={s.text}>Альони Гарник</p>
      </div>
    </div>
  );
};
