import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { Sidebar } from 'components/Sidebar';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { BookAddForm } from 'components/Forms';
import s from './BookAddPageComponent.module.scss';

export const BookAddPageComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <Sidebar />
        <div className={s.container}>
          <Breadcrumbs />
          <p className={s.title}>Додавання книги</p>
          <BookAddForm />
        </div>
      </FlexWrapper>
    </Container>
  );
};
