import PropTypes from 'prop-types';
import s from './BlockDescription.module.scss';

export const BlockDescription = ({ data }) => {
  return (
    <div className={s.container}>
      <div className={s.tabs}>
        <button className={s.activeTab}>Опис товару</button>
        <button className={s.disableTab}>Зміст книги</button>
        <button className={s.disableTab}>Фрагмент з книги</button>
        <button className={s.disableTab}>Відгуки покупців</button>
      </div>
      <div className={s.descriptionWrapper}>
        <p className={s.title}>Анотація</p>
        <p className={s.value}>{data.description}</p>
      </div>
    </div>
  );
};

BlockDescription.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    description: PropTypes.string,
  }),
};
