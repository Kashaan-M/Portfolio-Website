import React from 'react';
import hero from '../assets/hero-optimized.svg';
import { useGlobalContext } from '../context';
import Modal from './Modal';

export default function About() {
  const { light, isModalOpen, openModal } = useGlobalContext();
  return (
    <section className="about">
      <article className="about-intro-wrapper">
        <div className="about-intro">
          <h3
            className="about-intro-h3 about-intro-urdu"
            dir="rtl"
            style={{ textAlign: 'center' }}
          >
            السلام علیکم
          </h3>
          <h1 className="about-intro-h2" style={{ textAlign: 'center' }}>
            I am Kashaan
          </h1>
          <h2 className="about-intro-h3" style={{ textAlign: 'center' }}>
            a Front End Developer
          </h2>
        </div>
        <div className="about-modal">
          <button
            className={light ? ' modal-light-btn' : 'modal-dark-btn'}
            onClick={openModal}
          >
            Message Me
          </button>
        </div>
      </article>
      <article className="about-hero">
        <img src={hero} className="about-hero-image" alt="" />
      </article>

      {isModalOpen && <Modal />}
    </section>
  );
}
