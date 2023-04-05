import { useMemo, useRef, useState } from 'react';
import { ICONS } from 'assets/icons';
import { HeaderButton } from './HeaderButton';
import { toggleCart } from 'redux/slice/slice-cart';
import { useDispatch, useSelector } from 'react-redux';
import s from './HeaderButtonList.module.scss';
import { useOutsideClick } from 'hooks/useOutsideClick';

export const HeaderButtonList = () => {
  const ref = useRef();
  const [popup, setPopup] = useState(false);
  useOutsideClick(ref, setPopup);

  const dispatch = useDispatch();
  const orderItems = useSelector(state => state.cart.items);

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
        onClick: () => {},
      },
      {
        id: 'cart',
        icon: <ICONS.CART />,
        indicatorNumber: orderItems.reduce(
          (acc, item) => acc + item.quality,
          0
        ),
        onClick: () => {
          dispatch(toggleCart());
        },
      },
    ],
    [dispatch, orderItems, popup]
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
