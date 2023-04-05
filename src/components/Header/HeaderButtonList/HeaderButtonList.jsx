import { ICONS } from 'assets/icons';
import { HeaderButton } from './HeaderButton';
import { toggleCart } from 'redux/slice/slice-cart';
import { useDispatch, useSelector } from 'react-redux';
import s from './HeaderButtonList.module.scss';

export const HeaderButtonList = () => {
  const dispatch = useDispatch();
  const orderItems = useSelector(state => state.cart.items);

  const handleClickUser = () => {};
  const handleClickFavorite = () => {};
  const handleClickCart = () => {
    dispatch(toggleCart());
  };

  const buttonList = [
    {
      id: 'user',
      icon: <ICONS.USER className={s.userFill} />,
      onClick: handleClickUser,
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
      indicatorNumber: orderItems.reduce((acc, item) => acc + item.quality, 0),
      onClick: handleClickCart,
    },
  ];
  return (
    <ul className={s.container}>
      {buttonList.map(button => {
        return (
          <li key={button.id}>
            <HeaderButton
              icon={button.icon}
              indicatorNumber={button.indicatorNumber}
              onClick={button.onClick}
            />
          </li>
        );
      })}
    </ul>
  );
};
