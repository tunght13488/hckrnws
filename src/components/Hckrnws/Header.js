import React from 'react';

const Header = ({data}) => {
  return (
    <header className="Header">
      <div className="container is-fluid">
        <p>
          Showing page {data.page + 1} / {data.nbPages}. Links per pages: {data.hitsPerPage}. Total: {data.nbHits} links
        </p>
      </div>
    </header>
  );
};

export default Header;
