import { useSelector } from 'react-redux';
import s from './TotalPricePageComponent.module.scss';
import * as selectors from 'redux/selectors';
import { handleErrorGoogle } from 'utils/handleError';
import { Spinner } from 'components/Spinner';

export const TotalPricePageComponent = ({
  handleSubmit,
  total,
  orderTotal,
  totalDiscount,
  shippingCost,
}) => {
  const isAuth = useSelector(selectors.getIsAuth);
  const cartError = useSelector(selectors.getCartError);
  const cartSend = useSelector(selectors.getCartSend);
  const isError = useSelector(selectors.cartIsError);
  const isLoading = useSelector(selectors.cartIsLoading);
  const msgError = handleErrorGoogle(cartError);

  return (
    <>
      <div className={s.wrapperPrice}>
        <span className={s.title}>Разом</span>
        <ul className={s.listPrice}>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Сума замовлення</span>
              <span className={s.textItem}>{total} грн</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Знижка</span>
              <span className={s.textItem}>{totalDiscount} %</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Вартість доставки</span>
              <span className={s.textItem}>{shippingCost} грн</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Сума разом</span>
              <span className={s.textItem}>{orderTotal} грн</span>
            </div>
          </li>
        </ul>
        <button
          className={`${
            isError || (!isAuth && !cartSend)
              ? s.buttonPriceError
              : s.buttonPrice
          }`}
          type="button"
          onClick={handleSubmit}
          disabled={isError || (!isAuth && !cartSend)}
        >
          Підтверджую замовлення
        </button>

        <div>
          <small className={s.error}>{msgError}</small>
        </div>

        {cartSend ? (
          <small className={s.success}>
            Ваше замовлення успішно відправлено
          </small>
        ) : null}
        {!isAuth && !cartSend ? (
          <small className={s.success}>
            Для відправки замовлення потрібно увійти або зареєструватися
          </small>
        ) : null}
        {isLoading && (
          <div className={s.spinner}>
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
};
