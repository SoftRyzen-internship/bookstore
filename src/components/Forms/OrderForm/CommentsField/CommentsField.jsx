import s from './CommentsField.module.scss';

export const CommentsField = () => {
  return (
    <div className={s.commentWrapper}>
      <button className={s.addCommentBtn}>Додати коментар до замовлення</button>
    </div>
  );
};
