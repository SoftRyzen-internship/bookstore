import CATEGORIES from './data/categories.json';

export const getCategories = () => {
  return Promise.resolve(CATEGORIES.categories);
};

export const getSubcategories = categoryId => {
  const category = CATEGORIES.categories.find(
    category => category.id === categoryId
  );
  if (category && category.subcategories) {
    return Promise.resolve(category.subcategories);
  }
  return Promise.resolve([]);
};

// import axios from 'axios';

// export const getCategories = () => {
//   return (
//     axios
//       .get('/data/categories.json')
//       .then(response => response.data.categories)
//   );
// };

// export const getSubcategories = categoryId => {
//   return axios.get('/data/categories.json').then(response => {
//     const category = response.data.categories.find(
//       category => category.id === categoryId
//     );
//     if (category && category.subcategories) {
//       return category.subcategories;
//     }
//     return [];
//   });
// };
