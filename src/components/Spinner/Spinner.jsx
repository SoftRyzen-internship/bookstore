import React from 'react';
import s from './Spinner.module.scss';

export const Spinner = ({ className }) => {
  return <span className={`${s.loader} ${className}`}></span>;
};
