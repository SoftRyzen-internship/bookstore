import { BooksList } from 'components/BooksList';
import { MainContainer } from 'components/Containers/MainContainer';
import { Sidebar } from 'components/Sidebar';
import React from 'react';

export const HomePageComponent = () => {
  return (
    <>
      <Sidebar />
      <MainContainer>
        <BooksList />
      </MainContainer>
    </>
  );
};
