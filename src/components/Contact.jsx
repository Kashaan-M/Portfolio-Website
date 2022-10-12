import React from 'react';
import { contact } from '../data';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import envelope from '../assets/envelope.svg';
import telephone from '../assets/telephone.svg';

const contactImg = [linkedin, github, envelope, telephone];

export default function Contact() {
  return (
    <>
      <section id="contact">
        <article className="contact-wrapper">
          <h2 className="contact-text">Contact Me</h2>
          <div className="contact-container">
            {contact.map((platform) => {
              const { id, text, url } = platform;
              return (
                <div className="card" key={id}>
                  <a href={url}>
                    <img
                      src={contactImg[id]}
                      alt={text}
                      className="contact-card-img"
                    />
                    <h4 className="card-text">{text}</h4>
                  </a>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </>
  );
}
