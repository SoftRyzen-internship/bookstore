import s from './TotalPricePageComponent.module.scss';

export const TotalPricePageComponent = ({
  handleSubmit,
  total,
  orderTotal,
  totalDiscount,
  shippingCost,
  successMessage,
}) => {
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
        {successMessage && (
          <p className={s.success}>Замовлення відправлено дякуємо</p>
        )}
        {!successMessage && (
          <button
            className={s.buttonPrice}
            type="button"
            onClick={handleSubmit}
          >
            Підтверджую замовлення
          </button>
        )}
      </div>
    </>
  );
};
