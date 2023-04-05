import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { Sidebar } from 'components/Sidebar';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { BookEditForm } from 'components/Forms';
import { pages } from 'constants/pages';

import s from './BookEditPageComponent.module.scss';

export const BookEditPageComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <Sidebar />
        <div className={s.container}>
          <Breadcrumbs breadcrumbs={[pages.HOME, pages.BOOK_EDIT]} />
          <p className={s.title}>Редагування книги</p>
          <BookEditForm />
        </div>
      </FlexWrapper>
    </Container>
  );
};
