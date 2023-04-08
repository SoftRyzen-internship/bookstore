import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from 'redux/selectors';
import { logoutUser } from 'redux/operations/operations-user';
import { userRoles } from 'constants/userRoles';

import s from './HeaderButton.module.scss';
import { useNavigate } from 'react-router';
import { routesPath } from 'router/routesPath';

export const HeaderButton = ({
  buttonRef,
  icon,
  popup,
  onClick,
  indicatorNumber,
}) => {
  const userRole = useSelector(selectors.getUserRole);
  const isAuth = useSelector(selectors.getIsAuth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div ref={buttonRef} className={s.container}>
      <button className={s.button} type="button" onClick={onClick}>
        {icon}
      </button>
      {indicatorNumber ? (
        <div className={s.indicator}>{indicatorNumber}</div>
      ) : null}
      {popup && (
        <div className={s.popup}>
          <ul className={s.popupList}>
            {isAuth ? (
              <li className={s.userMenuItem}>
                <button
                  type="button"
                  onClick={() => {
                    navigate(routesPath.PROFILE);
                  }}
                >
                  Мої дані
                </button>
              </li>
            ) : (
              <>
                <li className={s.userMenuItem}>
                  <button
                    type="button"
                    onClick={() => {
                      navigate(routesPath.LOGIN);
                    }}
                  >
                    Логін
                  </button>
                </li>
                <li className={s.userMenuItem}>
                  <button
                    type="button"
                    onClick={() => {
                      navigate(routesPath.REGISTER);
                    }}
                  >
                    Реєстрація
                  </button>
                </li>
              </>
            )}
            {userRole === userRoles.ADMIN && (
              <li className={s.userMenuItem}>
                <button
                  type="button"
                  onClick={() => {
                    navigate(routesPath.HOME + routesPath.BOOK_ADD);
                  }}
                >
                  Додати книгу
                </button>
              </li>
            )}
            {isAuth && (
              <li className={s.userMenuItem}>
                <button
                  type="button"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  Вийти
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

HeaderButton.propTypes = {
  ref: PropTypes.node,
  icon: PropTypes.node,
  popup: PropTypes.bool,
  onClick: PropTypes.func,
  indicatorNumber: PropTypes.number,
};
