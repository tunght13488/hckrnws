import moment from 'moment';
import React from 'react';
import { authorUrl, itemUrl } from '../../network/config';

const Item = ({item}) => {
  return (
    <div className="box">
      <p className="title is-6">
        [ {item._tags[0]} ] <a href={item.url} target="_blank">{item.title}</a>
      </p>
      <p className="subtitle is-6">
        <a href={itemUrl(item.objectID)} target="_blank">{item.points} points</a>
        &nbsp;|&nbsp;
        <a href={authorUrl(item.author)} target="_blank">{item.author}</a>
        &nbsp;|&nbsp;
        <a href={itemUrl(item.objectID)} target="_blank">{moment.unix(item.created_at_i).fromNow()}</a>
        &nbsp;|&nbsp;
        <a href={itemUrl(item.objectID)} target="_blank">{item.num_comments || 0} comments</a>
        &nbsp;|&nbsp;
        (<a href={item.url} target="_blank">{item.url}</a>)
      </p>
      <p>Story Text: {item.story_text}</p>
      <p>Comment Text: {item.comment_text}</p>
    </div>
  );
};

export default Item;
