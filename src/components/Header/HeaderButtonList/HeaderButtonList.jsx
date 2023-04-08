import { useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from 'redux/slice/slice-cart';
import * as selectors from 'redux/selectors';
import { ICONS } from 'assets/icons';
import { userRoles } from 'constants/userRoles';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { HeaderButton } from './HeaderButton';

import s from './HeaderButtonList.module.scss';

export const HeaderButtonList = () => {
  const ref = useRef();
  const [popup, setPopup] = useState(false);
  useOutsideClick(ref, setPopup);

  const dispatch = useDispatch();
  const orderItems = useSelector(selectors.getCartItems);
  const userRole = useSelector(selectors.getUserRole);

  const buttonList = useMemo(() => {
    if (userRole === userRoles.BUYER || userRole === null) {
      return [
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
      ];
    }
    if (userRole === userRoles.ADMIN) {
      return [
        {
          id: 'user',
          icon: <ICONS.USER />,
          ref: ref,
          popup: popup,
          onClick: () => {
            setPopup(!popup);
          },
        },
      ];
    }
    return [];
  }, [dispatch, orderItems, popup, userRole]);

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
