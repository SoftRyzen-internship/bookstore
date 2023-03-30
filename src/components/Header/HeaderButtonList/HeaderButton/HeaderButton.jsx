import React from 'react';
import PropTypes from 'prop-types';
import s from './HeaderButton.module.scss';

export const HeaderButton = ({ icon, onClick, indicatorNumber }) => {
  return (
    <div className={s.container}>
      <button className={s.button} type="button" onClick={onClick}>
        {icon}
      </button>
      {indicatorNumber ? (
        <div className={s.indicator}>{indicatorNumber}</div>
      ) : null}
    </div>
  );
};

HeaderButton.propTypes = {
  icon: PropTypes.node,
  onClick: PropTypes.func,
  indicatorNumber: PropTypes.number,
};
