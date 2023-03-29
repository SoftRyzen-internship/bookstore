import React from 'react';
import { Logo } from 'components/Logo';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
    </header>
  );
};
