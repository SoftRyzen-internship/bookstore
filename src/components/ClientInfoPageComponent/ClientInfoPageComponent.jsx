import { useLocation, useNavigate } from 'react-router-dom';
import { ICONS } from 'assets/icons';
import s from './ClientInfoPageComponent.module.scss';
import { routesPath } from 'router/routesPath';
import * as selectors from 'redux/selectors';
import { useSelector } from 'react-redux';

export function ClientInfoPageComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const getUserFirstName = useSelector(selectors.getUserFirstName);
  const getUserLastName = useSelector(selectors.getUserLastName);
  const getUserFathersName = useSelector(selectors.getUserFathersName);
  const getUserEmail = useSelector(selectors.getUserEmail);
  const getUserPhone = useSelector(selectors.getUserPhone);
  const handleButton = e => {
    e.preventDefault();
    navigate('/' + routesPath.PROFILE, {
      state: {
        from: location,
      },
    });
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.infoWrapper}>
          <ul className={s.blockSpan}>
            <li className={s.groupIcon}>
              <ICONS.USER className={s.iconInfo} />
              <span className={s.textSpan}>
                {getUserFirstName} {getUserLastName} {getUserFathersName}
              </span>
            </li>
            <li className={s.groupIcon}>
              <ICONS.EMAIL className={s.iconInfo} />
              <span className={s.textSpan}>{getUserEmail}</span>
            </li>
            <li className={s.groupIcon}>
              <ICONS.CALL className={s.iconInfo} />
              <span className={s.textSpan}>{getUserPhone}</span>
            </li>
          </ul>
          <div>
            <div className={s.wrapperButtonChange}>
              <button
                onClick={handleButton}
                className={`${s.buttonChange}`}
                type="submit"
              >
                <ICONS.EDIT className={s.iconEdit} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
