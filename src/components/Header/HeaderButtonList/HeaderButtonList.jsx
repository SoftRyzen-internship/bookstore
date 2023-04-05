import { ICONS } from 'assets/icons';
import { HeaderButton } from './HeaderButton';
import s from './HeaderButtonList.module.scss';

export const HeaderButtonList = () => {
  const handleClickUser = () => {};
  const handleClickFavorite = () => {};
  const handleClickCart = () => {};

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
      // indicatorNumber: 1,
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
