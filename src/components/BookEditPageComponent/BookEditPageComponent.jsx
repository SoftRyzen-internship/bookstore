import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { Sidebar } from 'components/Sidebar';
import s from './BookEditPageComponent.module.scss';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { BookEditForm } from 'components/Forms';

export const BookEditPageComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <Sidebar />
        <div className={s.container}>
          <Breadcrumbs />
          <p className={s.title}>Редагування книги</p>
          <BookEditForm />
        </div>
      </FlexWrapper>
    </Container>
  );
};
