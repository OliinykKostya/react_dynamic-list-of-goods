import React, { useState } from 'react';
import './App.css';

import GoodsList from './GoodsList';
import { StateItem, getGoods } from './api';


const App = () => {
  const [goods, setGoods] = useState<StateItem[]>([]);

  const loadAllgoods = () => getGoods().then(setGoods);

  const loadFiveFirstGoods = () => getGoods()
    .then(items => items.sort((a: StateItem, b: StateItem) => a.name.localeCompare(b.name)))
    .then(item => item.slice(0, 5))
    .then(setGoods);

  const loadRedGoods = () => getGoods()
    .then(items => items.filter((item: StateItem) => item.color === 'red'))
    .then(setGoods);

  return (
    <>
      <GoodsList goods={goods} />
      <button type="button" onClick={loadAllgoods}>Load All goods</button>
      <button type="button" onClick={loadFiveFirstGoods}>Load 5 first goods</button>
      <button type="button" onClick={loadRedGoods}>Load red goods</button>
    </>
  );
};


export default App;
