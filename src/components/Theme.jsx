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
              type="checkbox"
              name="power"
              id="power"
              onClick={() => setLight(!light)}
            />
            <label htmlFor="power">
              <span className="dark">Dark Theme</span>
              <span className="light">Light Theme</span>
            </label>
          </li>
        </ul>
      </div>
    </>
  );
}
