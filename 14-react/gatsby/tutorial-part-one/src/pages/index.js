import React from 'react';
import Link from 'gatsby-link';

export default () => (
  <div style={{ color: "blue" }}>
    <h1>Goodbye cruel world!</h1>
    <p>The Great Gatsby was not that great</p>

    <img src="http://placekitten.com/400/400" />
    <p>
      <Link to="/page-2">Page-2</Link>
    </p>
    <p>
      <Link to="/counter">Visit our Click Counter</Link>
    </p>
  </div>
);
