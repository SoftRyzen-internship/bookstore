import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { generateId } from 'utils/generateId';
import { ICONS } from 'assets/icons';
import s from './ImgBookFormList.module.scss';
import { Modal } from 'components/Modal';

export const ImgBookFormList = memo(({ list, onDelete }) => {
  const [modalImg, setModalImg] = useState(null);
  return (
    <>
      <ul className={s.imgGalleryContainer}>
        {list.map((imgUrl, index) => {
          return (
            <li className={s.imgGalleryItem} key={generateId()}>
              <div className={s.imgThumb}>
                <img className={s.image} src={imgUrl} alt={`img-${index}`} />
              </div>
              <div className={s.imgButtonWrapper}>
                <button
                  type="button"
                  className={s.button}
                  onClick={() => {
                    setModalImg({ imgUrl, index });
                  }}
                >
                  <ICONS.EYE fill="var(--white)" />
                </button>
                <button
                  type="button"
                  className={s.button}
                  onClick={() => {
                    onDelete(imgUrl);
                  }}
                >
                  <ICONS.TRASH stroke="var(--white)" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {modalImg && (
        <Modal
          isOpen={modalImg}
          onClose={() => {
            setModalImg(null);
          }}
        >
          <div>
            <img
              className={s.modalImage}
              src={modalImg.imgUrl}
              alt={`img-${modalImg.index}`}
            />
          </div>
        </Modal>
      )}
    </>
  );
});

ImgBookFormList.propTypes = {
  onDelete: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};
