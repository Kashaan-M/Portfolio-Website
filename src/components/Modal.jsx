import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import closeBtn from '../assets/x-lg.svg';
import Alert from './Alert';

export default function Modal() {
  const {
    isModalOpen,
    closeModal,
    setIsSubmitted,
    submitter,
    setSubmitter,
    showAlert,
    setShowAlert,
  } = useGlobalContext();
  const formRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    form.addEventListener('submit', handleSubmit);

    return () => form.removeEventListener('submit', handleSubmit);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        setIsSubmitted(true);
        console.log('Form Successfully Submitted');
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <article
        className={isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'}
      >
        {showAlert && <Alert />}
        <div className='modal-container'>
          <div className='modal-header'>
            <h4 className='modal-header-text'>Write your message</h4>
            <button className='modal-close-btn' onClick={closeModal}>
              <img src={closeBtn} alt='X' width={30} height={25} />
            </button>
          </div>
          <div className='modal-body'>
            <form
              name='Messages'
              method='POST'
              data-netlify='true'
              ref={formRef}
            >
              <input type='hidden' name='form-name' value='Messages' />
              <label htmlFor='Name'>Your Name</label>
              <input
                type='text'
                value={submitter}
                name='Name'
                id='Name'
                maxLength='20'
                onChange={(e) => setSubmitter(e.target.value)}
                required
              />
              <label htmlFor='Email'>Your Email</label>
              <input
                type='email'
                name='Email'
                id='Email'
                required
                aria-describedby='emailHelp'
              />
              <div id='emailHelp'>
                Your Email won't get shared with anyone else
              </div>
              <label htmlFor='Message'>Your Message</label>
              <textarea
                name='Message'
                id='Message'
                rows='3'
                style={{ resize: 'none' }}
                required
              ></textarea>
              <button type='submit' className='modal-light-btn'>
                Send
              </button>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
