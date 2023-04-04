import s from './OrderField.module.scss';

export const OrderField = () => {
  return (
    <>
      <h2 className={s.title}>Ваше замовлення</h2>
      <table className={s.orderTable}>
        <tbody>
          <tr className={s.orderItem}>
            <td>
              <img
                className={s.bookPoster}
                src=""
                width="72"
                height="106"
                alt=""
              />
            </td>
            <td>
              <p className={s.bold}>Цифровий брендинг</p>
              <p>Деніель Роуз</p>
              <p>Паперова книга</p>
            </td>
            <td>
              <p>Ціна за од.</p>
              <p className={s.bold}>390,00 грн</p>
            </td>
            <td>
              <p>Кількість</p>
              <p className={s.bold}>1</p>
            </td>
            <td>
              <p>Знижка</p>
              <p className={s.bold}>16%</p>
            </td>
            <td>
              <p>Кінцева ціна</p>
              <p className={s.bold}>331,50 грн</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
