import { UserAuthPageComponent } from 'components/UserAuthPageComponent';

const AuthPage = ({ isRegister }) => {
  return <UserAuthPageComponent isRegister={isRegister} />;
};

export default AuthPage;
