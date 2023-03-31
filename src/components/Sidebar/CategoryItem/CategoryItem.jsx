import React from 'react';
import s from './CategoryItem.module.scss';
import { Link } from 'react-router-dom';
import { getSubcategories } from 'services/categories';

export const CategoryItem = ({
  category,
  activeCategoryId,
  setActiveCategoryId,
  setSubcategories,
  subcategories,
  subcategoriesRef,
}) => {
  const handleMouseEnter = categoryId => {
    if (subcategories.length === 0 || activeCategoryId !== categoryId) {
      getSubcategories(categoryId)
        .then(subcategories => {
          setSubcategories(subcategories);
          setActiveCategoryId(categoryId);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  const isActive = activeCategoryId === category.id;

  return (
    <li
      className={`${s.listItem} ${isActive ? s.active : ''}`}
      key={category.id}
    >
      <Link
        className={s.categoryLink}
        to={`#`}
        onMouseEnter={() => handleMouseEnter(category.id)}
      >
        {category.name}
      </Link>
      {isActive && (
        <ul ref={subcategoriesRef} className={`${s.subcategories} ${s.active}`}>
          {subcategories.map(subcategory => (
            <li key={subcategory.id} className={s.listItemSubcatigories}>
              <Link className={s.subcategoryLink} to={`#`}>
                {subcategory.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
