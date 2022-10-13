import React from 'react';
import { useGlobalContext } from '../context';
import closeBtn from '../assets/x-lg.svg';

export default function Modal() {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <>
      <article
        className={isModalOpen ? 'show-modal modal-overlay' : 'modal-overlay'}
      >
        <div className="modal-container">
          <div className="modal-header">
            <h4 className="modal-header-text">Write your message</h4>
            <button className="modal-close-btn" onClick={closeModal}>
              <img src={closeBtn} alt="X" width={30} height={25} />
            </button>
          </div>
          <div className="modal-body">
            <form
              name="Messages"
              method="POST"
              data-netlify="true"
              onSubmit="submit"
            >
              <input type="hidden" name="form-name" value="Messages" />
              <label htmlFor="Name">Your Name</label>
              <input
                type="text"
                name="Name"
                id="Name"
                maxLength="20"
                required
              />
              <label htmlFor="Email">Your Email</label>
              <input
                type="email"
                name="Email"
                id="Email"
                required
                aria-describedby="emailHelp"
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
              ></textarea>
              <button type="submit" className="modal-light-btn">
                Send
              </button>
            </form>
          </div>
        </div>
      </article>
    </>
  );
}
