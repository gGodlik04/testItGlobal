import { HandySvg } from 'handy-svg';
import React from 'react';
import phoneSvgSrc from './../svg/phone.svg';
import emailSvgSrc from './../svg/email.svg';


export default function User(props) {
  const user = props.user;
  return (
    <div className="user">
      <div className='user__name'>{user.name}</div>
      <div className='user-wrapper'>
        <HandySvg
          src={phoneSvgSrc}
          width="24px"
          height="24px"
          color="red"
        />
        <div className='user__phone'>{user.phone}</div>
      </div>

      <div className='user-wrapper'>
        <HandySvg
          src={emailSvgSrc}
          width="24px"
          height="24px"
          color="red"
        />
        <div className='user__email'>{user.email}</div>
      </div>
    </div>
  )
}