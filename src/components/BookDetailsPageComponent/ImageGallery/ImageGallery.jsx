import { useState } from 'react';
import s from './ImageGallery.module.scss';

export const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0].id);

  const handleImageClick = id => {
    setSelectedImage(id);
  };

  return (
    <div className={s.gallery}>
      <ul className={s.imageList}>
        {images.map(image => {
          return (
            <li
              className={`${s.item} ${
                selectedImage === image.id ? s.itemSelected : ''
              } `}
              key={image.id}
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                onClick={() => handleImageClick(image.id)}
                className={s.imgSmall}
                width={53}
                height={78}
              />
            </li>
          );
        })}
      </ul>
      <div className={s.imgBigContainer}>
        <img
          src={images.find(image => image.id === selectedImage).imageUrl}
          alt={images.find(image => image.id === selectedImage).alt}
          className={s.imgBig}
          width={371}
          height={543}
        />
      </div>
    </div>
  );
};
