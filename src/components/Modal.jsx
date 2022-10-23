import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import closeBtn from '../assets/x-lg.svg';
import Alert from './Alert';

export default function Modal() {
  const {
    isModalOpen,
    closeModal,
    isSubmitted,
    setIsSubmitted,
    submitter,
    setSubmitter,
    showAlert,
    setShowAlert,
  } = useGlobalContext();
  const formRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const form = formRef.current;
    form.addEventListener('submit', handleSubmit);

    return () => form.removeEventListener('submit', handleSubmit);
  }, [isSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    disableSubmission();
    setShowAlert(true);
    const myForm = e.target;
    const formData = new FormData(myForm);
    // using fetch API to send form data to Netlify
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
  }, [showAlert]);

  const disableSubmission = () => {
    nameRef.current.disabled = true;
    emailRef.current.disabled = true;
    messageRef.current.disabled = true;
    btnRef.current.disabled = true;
  };

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
                ref={nameRef}
                required
              />
              <label htmlFor='Email'>Your Email</label>
              <input
                type='email'
                name='Email'
                id='Email'
                required
                ref={emailRef}
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
                ref={messageRef}
                required
              ></textarea>
              <button
                type='submit'
                ref={btnRef}
                className={isSubmitted ? 'btn-disabled' : 'modal-light-btn'}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
