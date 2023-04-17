import React from 'react';
import Item from './Item';

export default function ItemsList({list, editItem, removeItem}) {
  return (
    <ul className="list">
      {list.map((el) => <Item
        item={el}
        key={el.id}
        editItem={editItem}
        removeItem={removeItem}/>)}
    </ul>
  )
}
