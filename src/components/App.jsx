import { Header } from './Header';

import 'styles/variables.scss';
import 'styles/global.scss';
import { MainWrapper } from './Containers/MainWrapper';
import { Sidebar } from './Sidebar';
import { MainContainer } from './Containers/MainContainer';
import { Footer } from './Footer';
import { BooksList } from './BooksList';
import { PageWrapper } from './Containers/PageWrapper/PageWrapper';

export const App = () => {
  return (
    <PageWrapper>
      <Header />
      <MainWrapper>
        <Sidebar />
        <MainContainer>
          <BooksList />
        </MainContainer>
      </MainWrapper>
      <Footer />
    </PageWrapper>
  );
};
