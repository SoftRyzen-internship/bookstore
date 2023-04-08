import { useEffect, useRef, useState } from 'react';
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
import { submitOrder } from 'services/submitOrder';
import { calculateTotal, shippingCost, totalDiscount } from 'utils';

export const UserAuthPageComponent = ({ isRegister }) => {
  const isAuth = useSelector(selectors.getIsAuth);
  const [successMessage, setSuccessMessage] = useState(false);
  const getOrderItems = useSelector(selectors.getCartItems);
  const name = useSelector(selectors.getUserFirstName);
  const lastName = useSelector(selectors.getUserLastName);
  const fathersName = useSelector(selectors.getUserFathersName);
  const phone = useSelector(selectors.getUserPhone);
  const email = useSelector(selectors.getUserEmail);
  const total = calculateTotal(getOrderItems);
  const orderTotal = (
    (total * (100 - totalDiscount)) / 100 +
    shippingCost
  ).toFixed(1);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate(routesPath.ORDER);
    }
  }, [isAuth, navigate]);
  const formRef = useRef(null);

  const handleSubmit = async event => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const orderData = Object.fromEntries(formData.entries());
    for (const key in orderData) {
      if (Object.hasOwnProperty.call(orderData, key)) {
        const value = orderData[key];
        formData.set(key, value);
      }
    }
    formData.set('name', name || '');
    formData.set('lastName', lastName || '');
    formData.set('fathersName', fathersName || '');
    formData.set('phone', phone || '');
    formData.set('email', email || '');
    formData.set('shippingCost', shippingCost || '');
    formData.set('totalDiscount', totalDiscount || '');
    formData.set('total', total || '');
    formData.set('orderTotal', orderTotal || '');

    try {
      if (isAuth) {
        await submitOrder(formData);
        setSuccessMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <div>
              <Breadcrumbs
                breadcrumbs={
                  isRegister
                    ? [pages.HOME, pages.LOGIN]
                    : [pages.HOME, pages.REGISTER]
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
              <OrderForm handleSubmit={handleSubmit} ref={formRef} />
            </div>
            <div className={s.groupTotalPrice}>
              <TotalPricePageComponent
                handleSubmit={handleSubmit}
                total={total}
                orderTotal={orderTotal}
                totalDiscount={totalDiscount}
                shippingCost={shippingCost}
                successMessage={successMessage}
              />
            </div>
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
