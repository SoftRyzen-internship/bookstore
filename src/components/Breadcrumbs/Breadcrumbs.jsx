import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import s from './Breadcrumbs.module.scss';

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    breadcrumbs && (
      <ul className={s.container}>
        {breadcrumbs.map((item, index) => (
          <li key={index} className={s.item}>
            <Link to={item.path} className={s.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    )
  );
};

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
