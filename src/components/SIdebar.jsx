import React, { useRef, useEffect } from 'react';
import { pages, social } from '../data';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import darkLogo from '../assets/kashaan-logo-dark-optimized.svg';
import lightLogo from '../assets/kashaan-logo-light-optimized.svg';
import closeBtn from '../assets/x-lg.svg';

export default function Sidebar() {
  const overlayRef = useRef();
  const { isSidebarOpen, light, closeSidebar } = useGlobalContext();

  useEffect(() => {
    const overlay = overlayRef.current;
    overlay.addEventListener('click', closeSidebar);

    return () => {
      overlay.removeEventListener('click', closeSidebar);
    };
  }, [closeSidebar]);
  return (
    <>
      <div
        className={isSidebarOpen ? 'sidebar-overlay' : 'none'}
        ref={overlayRef}
      ></div>
      <aside
        className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
        style={{ background: light ? '#ffffff' : '#000000' }}
      >
        <div className="sidebar-header">
          <img
            src={light ? darkLogo : lightLogo}
            className="sidebar-logo"
            alt="Kashaan"
          />
          <button
            className="sidebar-close-btn"
            onClick={closeSidebar}
            style={{ color: light ? '#222222' : '#f1f5f8' }}
          >
            <img src={closeBtn} alt="X" width={30} height={25} />
          </button>
        </div>

        <ul className="sidebar-links">
          {pages.map((page) => {
            const { id, url, text, icon } = page;
            return (
              <li key={id}>
                <Link to={url}>
                  {icon}
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="sidebar-social-icons">
          {social.map((platform) => {
            const { id, url, icon } = platform;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
          <li key="3">
            <a href="https://www.fiverr.com/kashan_pakistan">
              <svg
                width="30"
                height="25"
                id="svg_0"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <g>
                  <title>fiverr profile</title>
                  <g id="svg_4">
                    <circle
                      id="svg_1"
                      fill="currentColor"
                      r="12.34334"
                      cy="12.5"
                      cx="15"
                    />
                    <circle
                      id="svg_2"
                      r="1.30572"
                      fill={light ? '#f1f5f8' : '#222'}
                      cy="8.0381"
                      cx="18.01088"
                    />
                    <path
                      id="svg_3"
                      fill={light ? '#f1f5f8' : '#222'}
                      d="m19.37491,10.20005l-5.97705,0l0,-0.39167c0,-0.76924 0.76924,-0.78382 1.16091,-0.78382c0.44949,0 0.6531,0.04373 0.6531,0.04373l0,-2.1187a7.54227,7.54227 0 0 0 -0.95779,-0.05783c-1.24789,0 -3.55513,0.34793 -3.55513,2.98901l0,0.33578l-1.0885,0l0,1.95882l1.0885,0l0,4.13534l-1.01561,0l0,1.95882l4.90361,0l0,-1.96077l-1.19007,0l0,-4.13534l3.26308,0l0,4.13534l-1.01416,0l0,1.95882l4.7452,0l0,-1.95882l-1.0161,0l0,-6.10874z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
