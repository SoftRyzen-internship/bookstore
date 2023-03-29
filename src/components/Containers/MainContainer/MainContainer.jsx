import React from 'react';
import PropTypes from 'prop-types';
import s from './MainContainer.module.scss';

export const MainContainer = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

MainContainer.propTypes = {
  children: PropTypes.node,
};
