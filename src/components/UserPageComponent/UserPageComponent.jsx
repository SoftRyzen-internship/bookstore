import { Breadcrumbs } from 'components/Breadcrumbs';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { FormUser } from 'components/Forms/FormUser';
import { Sidebar } from 'components/Sidebar';
import s from './UserPageComponent.module.scss';
import { FormPassword } from 'components/Forms/FormPassword';

export const UserPageComponent = () => {
  return (
    <>
      <Container>
        <FlexWrapper>
          <Sidebar />
          <div className={s.wrapperPageForm}>
            <Breadcrumbs />
            <h2 className={s.title}>Особистий кабінет</h2>
            <FormUser />
            <FormPassword />
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
