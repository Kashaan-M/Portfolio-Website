import React from 'react';
import { useGlobalContext } from '../context';

export default function Alert() {
  const { submitter } = useGlobalContext();
  return (
    <>
      <div className='modal-alert'>
        <p className='thanks'>
          <span>✅&nbsp;&nbsp;</span>
          <span>Thanks for your message</span>
        </p>
        <span className='bold'>&nbsp;{submitter}&nbsp;!</span>
        <p className='asap'>I will reply ASAP</p>
      </div>
    </>
  );
}
