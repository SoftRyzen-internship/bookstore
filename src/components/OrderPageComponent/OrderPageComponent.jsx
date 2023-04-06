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
import { useEffect, useRef } from 'react';
import { currentUser } from 'redux/operations/operations-user';
import { pages } from 'constants/pages';
import { TotalPricePageComponent } from 'components/TotalPricePageComponent';
import { calculateTotal, shippingCost, totalDiscount } from 'utils';
import { orderUser } from 'redux/operations/operations-cart';

export const OrderPageComponent = () => {
  const isAuth = useSelector(selectors.getIsAuth);
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
  const dispatch = useDispatch();
  useEffect(() => {
    async function getCurrentUser() {
      await dispatch(currentUser());
    }
    if (isAuth) {
      getCurrentUser();
    }
  }, [dispatch, isAuth]);

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
        dispatch(orderUser(formData)).unwrap();
      }
    } catch (error) {}
  };

  return (
    <>
      <Container>
        <FlexWrapper>
          <div className={s.wrapperPageForm}>
            <div>
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
              <OrderForm handleSubmit={handleSubmit} ref={formRef} />
            </div>
            <div className={s.groupTotalPrice}>
              <TotalPricePageComponent
                handleSubmit={handleSubmit}
                total={total}
                orderTotal={orderTotal}
                totalDiscount={totalDiscount}
                shippingCost={shippingCost}
              />
            </div>
          </div>
        </FlexWrapper>
      </Container>
    </>
  );
};
