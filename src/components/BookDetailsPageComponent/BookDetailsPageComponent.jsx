import { useParams } from 'react-router-dom';
import { useFetch } from 'hooks/useFetch';
import { getBookDetails } from 'services/books-api';
import { pages } from 'constants/pages';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { ImageGallery } from './ImageGallery';
import { BlockInfo } from './BlockInfo';
import { Spinner } from 'components/Spinner';
import { Container } from 'components/Containers/Container';
import { BlockDescription } from './BlockDescription';

import s from './BookDetailsPageComponent.module.scss';

export const BookDetailsPageComponent = () => {
  const { id } = useParams();
  const { data, loading } = useFetch(() => getBookDetails(id), []);
  let images = [];
  if (data) {
    images = data.media_gallery_image.map((item, index) => {
      return {
        id: index,
        imageUrl: item,
        alt: `img-${index}`,
      };
    });
  }

  return (
    <>
      <div className={s.container}>
        <Container>
          <Breadcrumbs breadcrumbs={[pages.HOME, pages.BOOK_DETAIL]} />
          <div className={s.wrapper}>
            {loading && <Spinner />}
            {data && !!images.length && <ImageGallery images={images} />}
            {data && <BlockInfo data={data} />}
          </div>
        </Container>
      </div>
      <Container>{data && <BlockDescription data={data} />}</Container>
    </>
  );
};
