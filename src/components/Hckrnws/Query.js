import React from 'react';

const Query = ({value, onChange}) => {
  return (
    <div className="field">
      <div className="control has-icons-right">
        <input className="input" type="text" placeholder="Search stories by title, url or author" value={value}
          onChange={onChange}/>
        <span className="icon is-right">
          <i className="fa fa-search"/>
        </span>
      </div>
    </div>
  );
};

export default Query;
