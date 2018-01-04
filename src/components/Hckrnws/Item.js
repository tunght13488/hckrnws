import moment from 'moment';
import React from 'react';

const Item = ({item}) => {
  return (
    <li>
      <b>{item.points}</b> points - <b>{item.num_comments || 0}</b> comments - <b>[{item._tags[0]}]</b> <a href={item.url} target="_blank">{item.title}</a> -
      by <b>{item.author}</b> - {moment.unix(item.created_at_i).fromNow()}
    </li>
  );
};

export default Item;
