import { useEffect, useRef, useState } from 'react';
import { ICONS } from 'assets/icons';
import s from './Dropdown.module.scss';

export const Dropdown = ({
  className,
  placeHolder = '',
  options,
  isSearchable,
  initialValue,
  onClick,
  onChange,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    initialValue || options[0] || null
  );

  const [searchValue, setSearchValue] = useState('');
  const searchRef = useRef(null);
  const inputRef = useRef();

  useEffect(() => {
    setSearchValue('');
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = e => {
      const input = document.getElementById('dropdown-input');
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !input?.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };

    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, []);

  const handleInputClick = () => {
    setShowMenu(!showMenu);
    onClick();
  };

  const onItemClick = option => {
    setSelectedValue(option);
    if (onChange) onChange(option);
  };

  const isSelected = option => {
    if (!selectedValue) {
      return false;
    }
    return selectedValue.value === option.value;
  };

  const onSearch = e => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options.filter(
      option =>
        option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
    );
  };

  return (
    <div className={s.container}>
      <div
        ref={inputRef}
        onClick={handleInputClick}
        className={`${s.input} ${className ? className : ''}`}
      >
        <p className={s.selectedValue}>
          {!selectedValue ? placeHolder : selectedValue.label}
        </p>
        <ICONS.ARROW />
      </div>
      {showMenu && (
        <div className={s.menu}>
          {isSearchable && (
            <div className={s.search}>
              <input
                id="dropdown-input"
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
              />
            </div>
          )}
          {getOptions().map(option => (
            <div
              onClick={() => onItemClick(option)}
              key={option.value}
              className={`${s.item} ${isSelected(option) ? s.selected : ''}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
