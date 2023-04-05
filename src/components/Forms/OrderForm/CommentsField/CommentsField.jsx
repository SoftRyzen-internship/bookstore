import { useState } from 'react';
import s from './CommentsField.module.scss';

export const CommentsField = () => {
  const [textarea, setTextarea] = useState(false);
  const handleClickAddComment = e => {
    e.preventDefault();
    setTextarea(!textarea);
  };

  return (
    <div className={s.commentWrapper}>
      <button onClick={handleClickAddComment} className={s.addCommentBtn}>
        Додати коментар до замовлення
      </button>
      {textarea && (
        <textarea name="comment" id="comment" className={s.textarea}></textarea>
      )}
    </div>
  );
};
