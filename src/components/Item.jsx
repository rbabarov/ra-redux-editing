import React from 'react';

export default function Item({item, editItem, removeItem}) {
  return (
    <li>
      <p className="item-text">{`${item.name} ${item.price}`}</p>
      <div>
        <button className="btn-edit" onClick={() => editItem(item)}></button>
        <button className="btn-remove" onClick={() => removeItem(item)}></button>
      </div>
    </li>
  )
}
