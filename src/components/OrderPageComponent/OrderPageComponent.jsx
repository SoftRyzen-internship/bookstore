import { NavLink } from 'react-router-dom';
import { Breadcrumbs } from 'components/Breadcrumbs';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import s from './OrderPageComponent.module.scss';
import { FormLogin } from 'components/Forms/FormLogin';
import { OrderForm } from 'components/Forms';
import * as selectors from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ClientInfoPageComponent } from 'components/ClientInfoPageComponent';
import { useEffect } from 'react';
import { currentUser } from 'redux/operations/operations-user';
import { pages } from 'constants/pages';

export const OrderPageComponent = () => {
  const isAuth = useSelector(selectors.getIsAuth);
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCurrentUser() {
      await dispatch(currentUser());
    }
    if (isAuth) {
      getCurrentUser();
    }
  }, [dispatch, isAuth]);

  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <Breadcrumbs breadcrumbs={[pages.HOME, pages.ORDER]} />
            <h2 className={s.title}>Оформлення замовлення</h2>
            <div className={s.blockWrapper}>
              <div className={s.titleWrapper}>
                <span className={s.titleForm}>Особисті дані</span>
              </div>
              <div className={s.wrapperpageActive}>
                <div className={s.blockpageActive}>
                  {isAuth ? (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? `${s.pageActive} ${s.activeLink}`
                          : `${s.pageActive} ${s.inactiveLink}`
                      }
                      to="/order"
                    >
                      Новий покупець
                    </NavLink>
                  ) : (
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
                  )}
                </div>
                <div className={s.blockpageActive}>
                  <NavLink
                    onClick={isAuth ? e => e.preventDefault() : null}
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
            {isAuth ? <ClientInfoPageComponent /> : <FormLogin />}
            <OrderForm />
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
