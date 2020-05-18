const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export interface StateItem {
  id: number;
  name: string;
  color: string;
}

export const getGoods = () => {
  return fetch(API_URL)
    .then(response => response.json());
};
