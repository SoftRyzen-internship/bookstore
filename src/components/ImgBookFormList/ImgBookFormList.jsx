import PropTypes from 'prop-types';
import { memo } from 'react';
import { generateId } from 'utils/generateId';
import { ICONS } from 'assets/icons';
import s from './ImgBookFormList.module.scss';

export const ImgBookFormList = memo(({ list, onDelete }) => {
  return (
    <ul className={s.imgGalleryContainer}>
      {list.map((imgUrl, index) => {
        return (
          <li className={s.imgGalleryItem} key={generateId()}>
            <img className={s.image} src={imgUrl} alt={`img-${index}`} />
            <button
              type="button"
              className={s.deleteButton}
              onClick={() => {
                onDelete(imgUrl);
              }}
            >
              <ICONS.TRASH className={s.deleteIcon} />
            </button>
          </li>
        );
      })}
    </ul>
  );
});

ImgBookFormList.propTypes = {
  onDelete: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};
