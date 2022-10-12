import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <Link to="/">Back To About</Link>
    </div>
  );
}
