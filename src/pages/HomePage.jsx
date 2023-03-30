import React from 'react';
import { BooksList } from 'components/BooksList';
import { MainContainer } from 'components/Containers/MainContainer';
import { MainWrapper } from 'components/Containers/MainWrapper';
import { Sidebar } from 'components/Sidebar';

// import { MainWrapper } from './Containers/MainWrapper';
// import { Sidebar } from './Sidebar';
// import { MainContainer } from './Containers/MainContainer';
// import { BooksList } from './BooksList';

export const HomePage = () => {
  return (
    <MainWrapper>
      <Sidebar />
      <MainContainer>
        <BooksList />
      </MainContainer>
    </MainWrapper>
  );
};
