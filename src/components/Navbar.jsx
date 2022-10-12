import React, { useEffect, useRef } from 'react';
import { pages } from '../data';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import Theme from './Theme';
import darkLogo from '../assets/kashaan-logo-dark-optimized.svg';
import lightLogo from '../assets/kashaan-logo-light-optimized.svg';
import Sidebar from './SIdebar';

export default function Navbar() {
  const { light, openSidebar } = useGlobalContext();
  const headerRef = useRef();

  useEffect(() => {
    if (!light) {
      document.body.classList.add('dark-theme');
      headerRef.current.parentElement.parentElement.style.background =
        '#222222';
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      headerRef.current.parentElement.parentElement.style.background =
        '#f1f5f8';
      document.body.classList.remove('dark-theme');
    }
  }, [light]);

  return (
    <>
      <header ref={headerRef}>
        <nav className="section">
          <div className="nav-center">
            <div className="nav-header">
              <img src={light ? darkLogo : lightLogo} alt="Kashaan" />
              <Theme />
              <button className="nav-toggle" onClick={openSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className={light ? 'dark-btn' : 'light-btn'}
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="links-container">
              <ul>
                {pages.map((page) => {
                  const { id, url, text, icon } = page;
                  return (
                    <li key={id}>
                      <Link to={url} className="nav-anchor-link">
                        {icon}
                        <span className="link-txt">{text}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com/Kashaan-M"
                className="nav-anchor-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  fill="currentColor"
                  className="nav-icon"
                  viewBox="0 0 16 16"
                >
                  <title>GitHub Profile</title>
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kashaan-mahmood-63a496a4/"
                className="nav-anchor-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="25"
                  fill="currentColor"
                  className="nav-icon"
                  viewBox="0 0 16 16"
                >
                  <title>LinkedIn Profile</title>
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a
                href="https://www.fiverr.com/kashan_pakistan"
                className="nav-anchor-link"
              >
                <svg
                  width="30"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <g>
                    <title>fiverr profile</title>
                    <g>
                      <circle
                        fill="currentColor"
                        r="12.34334"
                        cy="12.5"
                        cx="15"
                      />
                      <circle
                        r="1.30572"
                        fill={light ? '#f1f5f8' : '#222'}
                        cy="8.0381"
                        cx="18.01088"
                      />
                      <path
                        fill={light ? '#f1f5f8' : '#222'}
                        d="m19.37491,10.20005l-5.97705,0l0,-0.39167c0,-0.76924 0.76924,-0.78382 1.16091,-0.78382c0.44949,0 0.6531,0.04373 0.6531,0.04373l0,-2.1187a7.54227,7.54227 0 0 0 -0.95779,-0.05783c-1.24789,0 -3.55513,0.34793 -3.55513,2.98901l0,0.33578l-1.0885,0l0,1.95882l1.0885,0l0,4.13534l-1.01561,0l0,1.95882l4.90361,0l0,-1.96077l-1.19007,0l0,-4.13534l3.26308,0l0,4.13534l-1.01416,0l0,1.95882l4.7452,0l0,-1.95882l-1.0161,0l0,-6.10874z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <Sidebar />
    </>
  );
}
