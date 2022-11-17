import React from 'react';
import hero from '../assets/hero-optimized.svg';
import { useGlobalContext } from '../context';
import Modal from './Modal';

export default function About() {
  const { light, isModalOpen, openModal, isSubmitted, clicked, setClicked } =
    useGlobalContext();
  const click = clicked === 1;
  const freshModal = isModalOpen && click;
  return (
    <section className='about' aria-label='About Me'>
      <article className='about-intro-wrapper'>
        <div className='about-intro'>
          <h3
            className='about-intro-h3 about-intro-urdu'
            dir='rtl'
            style={{ textAlign: 'center' }}
          >
            السلام علیکم
          </h3>
          <h1 className='about-intro-h2' style={{ textAlign: 'center' }}>
            I am Kashaan
          </h1>
          <h2 className='about-intro-h3' style={{ textAlign: 'center' }}>
            a Full Stack JavaScript Developer
          </h2>
        </div>
        <div className='about-modal'>
          <button
            className={
              light && !isSubmitted
                ? 'modal-light-btn'
                : light && isSubmitted
                ? 'btn-disabled'
                : !light && !isSubmitted
                ? 'modal-dark-btn'
                : 'btn-disabled'
            }
            onClick={openModal}
          >
            Message Me
          </button>
        </div>
      </article>
      <article className='about-hero'>
        <img src={hero} className='about-hero-image' alt='' />
      </article>

      {freshModal && <Modal />}
    </section>
  );
}
