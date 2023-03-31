import { Logo } from 'components/Logo';
import { Input } from 'components/Input';
import { ContactInfo } from 'components/ContactInfo';
import { HeaderButtonList } from './HeaderButtonList';
import s from './Header.module.scss';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';

export const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.headerWrapper}>
          <Logo />
          <FlexWrapper>
            <Input />
            <div className={s.buttonWrapper}>
              <ContactInfo />
              <HeaderButtonList />
            </div>
          </FlexWrapper>
        </div>
      </Container>
    </header>
  );
};
