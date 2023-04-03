import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export const Modal = ({ isOpen, onClose, children }) => {
  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className={s.modalBackdrop} onClick={handleBackdropClick}>
        <div className={s.modalContent}>{children}</div>
      </div>
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};
