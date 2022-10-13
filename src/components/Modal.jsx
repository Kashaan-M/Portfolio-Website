import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import closeBtn from '../assets/x-lg.svg';
import Success from './Success';

export default function Modal() {
  const {
    isModalOpen,
    closeModal,
    isSubmitted,
    setIsSubmitted,
    submitter,
    setSubmitter,
    disabled,
    setDisabled,
  } = useGlobalContext();

  useEffect(() => {
    if (isSubmitted) {
      let timeout = setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isSubmitted, setIsSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setDisabled(true);
  };

  return (
    <>
      <article
        className={isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'}
      >
        {isSubmitted && <Success />}
        <div className="modal-container">
          <div className="modal-header">
            <h4 className="modal-header-text">Write your message</h4>
            <button className="modal-close-btn" onClick={closeModal}>
              <img src={closeBtn} alt="X" width={30} height={25} />
            </button>
          </div>
          <div className="modal-body">
            <form
              method="POST"
              name="Messages"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="Messages"  />
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name="Name"
                value={submitter}
                id="Name"
                maxLength="20"
                required
                onChange={(e) => setSubmitter(e.target.value)}
                disabled={disabled}
              />
              <label htmlFor="Email">Your Email</label>
              <input
                type="email"
                name="Email"
                id="Email"
                required
                aria-describedby="emailHelp"
                disabled={disabled}
              />
              <div id="emailHelp">
                Your Email won't get shared with anyone else
              </div>
              <label htmlFor="Message">Your Message</label>
              <textarea
                name="Message"
                id="Message"
                rows="3"
                style={{ resize: 'none' }}
                required
                disabled={disabled}
              ></textarea>
              <button
                type="submit"
                className={
                  disabled ? 'disabled-btn modal-light-btn' : 'modal-light-btn'
                }
                disabled={disabled}
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
