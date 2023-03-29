import React from 'react';
import PropTypes from 'prop-types';
import s from './PageWrapper.module.scss';

export const PageWrapper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

PageWrapper.propTypes = {
  children: PropTypes.node,
};
