import React from 'react';

export default function Success() {
  return (
    <article className="alert-wrapper">
      <div className="alert-container">
        <h3>
          Thanks for your message{' '}
          <span className="submitter-name">{localStorage.getItem('name')}</span>{' '}
          I'll reply ASAP !
        </h3>
      </div>
    </article>
  );
}
