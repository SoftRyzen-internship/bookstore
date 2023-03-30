import { BooksList } from 'components/BooksList';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { Sidebar } from 'components/Sidebar';

export const HomePageComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <Sidebar />
        <BooksList />
      </FlexWrapper>
    </Container>
  );
};
