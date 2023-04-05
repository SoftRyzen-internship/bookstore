import { ICONS } from 'assets/icons';
import { useState } from 'react';

import s from './Input.module.scss';

export const Input = () => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    setValue('');
  };
  return (
    <label className={s.inputContainer}>
      <input
        className={s.input}
        name="search"
        placeholder="Напишіть назву книги"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button className={s.iconButton} type="button" onClick={handleClick}>
        <ICONS.SEARCH />
      </button>
    </label>
  );
};
