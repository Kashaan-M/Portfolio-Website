import React from 'react';
import python from '../assets/Python-for-Everybody.png';
import responsive from '../assets/responsive-design-certification.png';
import js from '../assets/javascript-algorithms-and-data-structures.png';
import backend from '../assets/backend-development-and-apis-certification.png';

export default function Certificates() {
  return (
    <section id='certificates' role='region' aria-label='Certifications'>
      <article className='certificates-wrapper'>
        <h2 className='certificates-text'>
          These are some Project-based Certifications I've Earned
        </h2>
        <p>Click on a certificate to find out more</p>
        <div className='certificates-container'>
          <div className='certificate'>
            <a href='https://www.freecodecamp.org/certification/kashaan_mahmood/responsive-web-design'>
              <img
                src={responsive}
                alt='Responsive Web Design Certificate'
                className='certificate-img'
              />
            </a>
          </div>

          <div className='certificate'>
            <a href='https://www.freecodecamp.org/certification/Kashaan_Mahmood/javascript-algorithms-and-data-structures'>
              <img
                src={js}
                alt='JavaScript Algorithms and Data Structures Certificate'
                className='certificate-img'
              />
            </a>
          </div>

          <div className='certificate'>
            <a href='https://www.freecodecamp.org/certification/Kashaan_Mahmood/back-end-development-and-apis'>
              <img
                src={backend}
                alt='Backend Development and APIs Certificate'
                className='certificate-img'
              />
            </a>
          </div>

          <div className='certificate'>
            <a href='https://www.coursera.org/verify/6Q7YD%20PAGSYVT'>
              <img src={python} alt='Python Programming Certificate' className='certificate-img' />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
