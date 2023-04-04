import { Breadcrumbs } from 'components/Breadcrumbs';
import { Container } from 'components/Containers/Container';
import { FlexWrapper } from 'components/Containers/FlexWrapper';
import s from './UserAuthPageComponent.module.scss';

import { FormRegistration } from 'components/Forms/FormRegistration';
import { FormLogin } from 'components/Forms/FormLogin';
import { NavLink } from 'react-router-dom';

export const UserAuthPageComponent = ({ isRegister }) => {
  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <Breadcrumbs />
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
            {isRegister ? <FormRegistration /> : <FormLogin />}
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
