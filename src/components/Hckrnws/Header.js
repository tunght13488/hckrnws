import React from 'react';

const Header = ({data}) => {
  return (
    <section className="Header section">
      <div className="container">
        <p>
          Showing page {data.page + 1} / {data.nbPages}. Links per pages: {data.hitsPerPage}. Total: {data.nbHits} links
        </p>
      </div>
    </section>
  );
};

export default Header;
