import s from './SpinnerButton.module.scss';

export const SpinnerButton = ({ className }) => {
  return <span className={`${s.loader} ${className}`}></span>;
};
