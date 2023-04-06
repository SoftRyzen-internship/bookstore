import s from './GiftCertificatePageComponent.module.scss';

export const GiftCertificatePageComponent = ({ isCompleteDelivery }) => {
  return (
    <>
      <div className={s.wrapperPrice}>
        <span className={s.title}>Разом</span>
        <ul className={s.listPrice}>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Сума замовлення</span>
              <span className={s.textItem}>390,00 грн</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Знижка</span>
              <span className={s.textItem}>58,50 грн</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Вартість доставки</span>
              <span className={s.textItem}>65,00 грн</span>
            </div>
          </li>
          <li className={s.itemPrice}>
            <div className={s.textItemGroup}>
              <span className={s.textItem}>Сума разом</span>
              <span className={s.textItem}>396,50 грн</span>
            </div>
          </li>
        </ul>
        <button className={s.buttonPrice}>Підтверджую замовлення</button>
      </div>
    </>
  );
};
