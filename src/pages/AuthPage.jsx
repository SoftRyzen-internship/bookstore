import { UserAuthPageComponent } from 'components/UserAuthPageComponent';

const AuthPage = ({ isRegister, isOrder }) => {
  return <UserAuthPageComponent isRegister={isRegister} isOrder={isOrder} />;
};

export default AuthPage;
