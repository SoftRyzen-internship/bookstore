import React from 'react';
import { Logo } from 'components/Logo';
import s from './Header.module.scss';
import { Input } from 'components/Input';
import { ContactInfo } from 'components/ContactInfo';
import { HeaderButtonList } from './HeaderButtonList';

export const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <div className={s.rightWrapper}>
        <Input />
        <div className={s.buttonWrapper}>
          <ContactInfo />
          <HeaderButtonList />
        </div>
      </div>
    </header>
  );
};
