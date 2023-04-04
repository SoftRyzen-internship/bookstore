import { Link } from 'react-router-dom';
import { routesPath } from 'router/routesPath';
import { ICONS } from 'assets/icons';

import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to={routesPath.HOME} className={s.container}>
      <ICONS.LOGO />
      <div className={s.wrapper}>
        <p className={s.text}>Книгарня</p>
        <p className={s.text}>Альони Гарник</p>
      </div>
    </Link>
  );
};
