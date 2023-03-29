import React from 'react';
import { Logo } from 'components/Logo';
import s from './Header.module.scss';
import { Input } from 'components/Input';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div className={s.wrapper}>
        <Input />
      </div>
    </header>
  );
};
