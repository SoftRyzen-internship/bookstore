import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from 'redux/selectors';
import { routesPath } from 'router/routesPath';
import { pages } from 'constants/pages';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import { FormRegistration } from 'components/Forms/FormRegistration';
import { FormLogin } from 'components/Forms/FormLogin';
import { OrderForm } from 'components/Forms';
import { TotalPricePageComponent } from 'components/TotalPricePageComponent';

import s from './UserAuthPageComponent.module.scss';

export const UserAuthPageComponent = ({ isRegister }) => {
  const isAuth = useSelector(selectors.getIsAuth);

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/' + routesPath.ORDER);
    }
  }, [isAuth, navigate]);

  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <Breadcrumbs
              breadcrumbs={
                isRegister
                  ? [pages.HOME, pages.REGISTER]
                  : [pages.HOME, pages.LOGIN]
              }
            />
            <h2 className={s.title}>Оформлення замовлення</h2>
            <div className={s.blockWrapper}>
              <div className={s.titleWrapper}>
                <span className={s.titleForm}>Особисті дані</span>
              </div>
              <div className={s.wrapperpageActive}>
                <div className={s.blockpageActive}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${s.pageActive} ${s.activeLink}`
                        : `${s.pageActive} ${s.inactiveLink}`
                    }
                    to="/register"
                  >
                    Новий покупець
                  </NavLink>
                </div>
                <div className={s.blockpageActive}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? `${s.pageActive} ${s.activeLink}`
                        : `${s.pageActive} ${s.inactiveLink}`
                    }
                    to="/login"
                  >
                    Постійний клієнт
                  </NavLink>
                </div>
              </div>
            </div>
            {isRegister ? (
              !isAuth ? (
                <FormRegistration />
              ) : (
                <p>Я Віталій Валерійович</p>
              )
            ) : (
              <FormLogin />
            )}
            <OrderForm />
            <TotalPricePageComponent />
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
