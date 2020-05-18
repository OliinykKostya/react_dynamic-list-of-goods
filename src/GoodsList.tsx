import React from 'react';
import { StateItem } from './api';

type Props = {
  goods: StateItem[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(item => (
      <li key={item.id} style={{ color: item.color }}>
        {item.name}
      </li>
    ))}
  </ul>
);


export default GoodsList;
