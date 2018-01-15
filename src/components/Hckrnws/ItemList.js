import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <div className="ItemList columns">
      <ol className="column">
        {items.map(item => (
          <Item key={item.objectID} item={item}/>
        ))}
      </ol>
    </div>
  );
};

export default ItemList;
