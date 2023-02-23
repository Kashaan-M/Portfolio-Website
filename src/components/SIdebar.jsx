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
        ref={overlayRef}></div>
      <aside
        className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
        style={{ background: light ? '#ffffff' : '#000000' }}
        aria-label='Sidebar'>
        <div
          className='sidebar-header'
          role='region'
          aria-label='logo and sidebar close button'>
          <img
            src={light ? darkLogo : lightLogo}
            className='sidebar-logo'
            alt='Kashaan'
          />
          <button
            className='sidebar-close-btn'
            onClick={closeSidebar}
            style={{ color: light ? '#222222' : '#f1f5f8' }}
            aria-label='Close Sidebar'>
            <img src={closeBtn} alt='' width={30} height={25} />
          </button>
        </div>

        <ul className='sidebar-links' role='navigation' aria-label='Pages'>
          {pages.map((page) => {
            const { id, url, text, icon } = page;
            return (
              <li key={id} role='listitem' aria-labelledby='sidebar-links'>
                <Link to={url}>
                  {icon}
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className='sidebar-social-icons' aria-label='Social Links'>
          {social.map((platform) => {
            const { id, url, icon } = platform;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
          <li key='4' aria-label='My blog'>
            <a
              href='https://kashaan-m.github.io/blog'
              style={{ 'font-weight': 'bold' }}
              className={'blog_button'}
              target='_blank'
              rel='noreferrer'>
              My Blog
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
