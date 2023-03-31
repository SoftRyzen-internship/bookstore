import { useEffect, useRef, useState } from 'react';
import { getCategories } from 'services/categories';
import { CategoryItem } from './CategoryItem';
import s from './Sidebar.module.scss';

export const Sidebar = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then(categories => {
        setCategories(categories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const asideRef = useRef(null);
  const subcategoriesRef = useRef(null);

  const handleClickOutside = e => {
    if (
      asideRef.current &&
      !asideRef.current.contains(e.target) &&
      subcategoriesRef.current &&
      !subcategoriesRef.current.contains(e.target)
    ) {
      setActiveCategoryId(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickAside = () => {
    setActiveCategoryId(null);
  };

  return (
    <aside ref={asideRef} className={s.sidebar} onClick={handleClickAside}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Категорії</h2>
      </div>
      <div className={s.categoriesWrapper}>
        <ul className={s.listWrapper}>
          {categories.map(category => (
            <CategoryItem
              category={category}
              key={category.id}
              activeCategoryId={activeCategoryId}
              setActiveCategoryId={setActiveCategoryId}
              setSubcategories={setSubcategories}
              subcategories={subcategories}
              subcategoriesRef={subcategoriesRef}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
};
