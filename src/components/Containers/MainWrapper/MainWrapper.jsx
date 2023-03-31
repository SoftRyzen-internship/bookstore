import PropTypes from 'prop-types';
import s from './MainWrapper.module.scss';

export const MainWrapper = ({ children }) => {
  return <main className={s.wrapper}>{children}</main>;
};

MainWrapper.propTypes = {
  children: PropTypes.node,
};
