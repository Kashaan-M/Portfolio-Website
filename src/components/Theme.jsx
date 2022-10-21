import React from 'react';
import { useGlobalContext } from '../context';

export default function Theme({ sidebar }) {
  const { light, setLight } = useGlobalContext();
  return (
    <>
      <div
        className={
          sidebar ? 'sidebar-toggle-theme toggle-theme' : 'toggle-theme'
        }
      >
        <ul>
          <li>
            <input
              type='checkbox'
              name='theme'
              id='theme'
              onClick={() => setLight(!light)}
            />
            <label htmlFor='theme'>
              <span
                className='dark'
                role='menuitemcheckbox'
                aria-checked='true'
                aria-label='dark theme'
              >
                Dark Theme
              </span>
              <span
                className='light'
                role='menuitemcheckbox'
                aria-checked='false'
                aria-label='light theme'
              >
                Light Theme
              </span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
