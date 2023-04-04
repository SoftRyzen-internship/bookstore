import { useMemo, useRef, useState } from 'react';
import { ICONS } from 'assets/icons';
import { HeaderButton } from './HeaderButton';
import s from './HeaderButtonList.module.scss';
import { useOutsideClick } from 'hooks/useOutsideClick';

export const HeaderButtonList = () => {
  const ref = useRef();
  const [popup, setPopup] = useState(false);
  useOutsideClick(ref, setPopup);

  const handleClickFavorite = () => {};
  const handleClickCart = () => {};

  const buttonList = useMemo(
    () => [
      {
        id: 'user',
        icon: <ICONS.USER />,
        ref: ref,
        popup: popup,
        onClick: () => {
          setPopup(!popup);
        },
      },
      {
        id: 'favorite',
        icon: <ICONS.FAVORITE />,
        // indicatorNumber: 3,
        onClick: handleClickFavorite,
      },
      {
        id: 'cart',
        icon: <ICONS.CART />,
        // indicatorNumber: 1,
        onClick: handleClickCart,
      },
    ],
    [popup]
  );

  return (
    <ul className={s.container}>
      {buttonList.map(button => {
        return (
          <li key={button.id}>
            <HeaderButton
              icon={button.icon}
              buttonRef={button.ref}
              popup={button.popup}
              indicatorNumber={button.indicatorNumber}
              onClick={button.onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
