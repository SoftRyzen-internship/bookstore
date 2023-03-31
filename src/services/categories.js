import axios from 'axios';

export const getCategories = () => {
  return axios
    .get('/data/categories.json')
    .then(response => response.data.categories);
};

export const getSubcategories = categoryId => {
  return axios.get('/data/categories.json').then(response => {
    const category = response.data.categories.find(
      category => category.id === categoryId
    );
    if (category && category.subcategories) {
      return category.subcategories;
    }
    return [];
  });
};
