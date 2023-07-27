import { HandySvg } from 'handy-svg';
import React, { useState } from 'react';
import phoneSvgSrc from './../svg/phone.svg';
import emailSvgSrc from './../svg/email.svg';
import ModalInfo from './ModalInfo';


export default function User(props) {
  const user = props.user;

  const [popUpActive, setPopUpActive] = useState(false) 

  return (
      <div className="user">
        <div className='user__name'>{user.name}</div>
        <div className='user-wrapper'>
          <HandySvg
            src={phoneSvgSrc}
            width="24px"
            height="24px"
          />
          <div className='user__phone'>{user.phone}</div>
        </div>
        <div className='user-wrapper'>
          <HandySvg
            src={emailSvgSrc}
            width="24px"
            height="24px"
          />
          <div className='user__email'>{user.email}</div>
        </div>
        <ModalInfo user={user} active={popUpActive} setActive={setPopUpActive} />
        <button className="button-modal" onClick={() => setPopUpActive(true)}></button>
      </div>
  )
}