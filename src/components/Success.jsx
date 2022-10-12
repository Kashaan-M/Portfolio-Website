import React from 'react';
import { useGlobalContext } from '../context';

export default function Success() {
  const { submitter } = useGlobalContext();
  return (
    <div className="alert-container">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#00e673"
          class="bi"
          viewBox="0 0 16 16"
        >
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
        &nbsp;Thanks for your message{' '}
        <span className="submitter-name">{submitter}</span> I'll reply ASAP !
      </p>
    </div>
  );
}
