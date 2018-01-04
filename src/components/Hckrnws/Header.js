import React from 'react';

const Header = ({data}) => {
  return (
    <div>
      Showing page {data.page + 1} / {data.nbPages}. Links per pages: {data.hitsPerPage}. Total: {data.nbHits} links
    </div>
  );
};

export default Header;
