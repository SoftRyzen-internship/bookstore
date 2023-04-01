import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { FormUser } from 'components/Form/FormUser';
import { Sidebar } from 'components/Sidebar';

export const UserPageComponent = () => {
  return (
    <Container>
      <FlexWrapper>
        <Sidebar />
        <FormUser />
      </FlexWrapper>
    </Container>
  );
};
