import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
  return (
    <section className="ItemList">
      <div className="container is-fluid">
        {items.map(item => (
          <Item key={item.objectID} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default ItemList;
