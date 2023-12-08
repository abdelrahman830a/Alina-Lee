import React, { useContext } from 'react';
import {
  ImFacebook,
  ImPinterest,
  ImInstagram,
  ImYoutube,
  ImTwitter
}from "react-icons/im"
import { CursorContext } from '../context/CursorContext';
const Socials = () => {
  const {mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)
  return <div className='hidden xl:flex ml-24'>
    <ul onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className='flex gap-x-4'>
      <li>
        <a href='http://www.facebook.com' target='_blank' rel="noreferrer">
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href='http://www.twitter.com' target='_blank' rel="noreferrer">
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href='http://www.pinterest.com' target='_blank' rel="noreferrer">
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com' target='_blank' rel="noreferrer">
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href='http://www.youtube.com' target='_blank' rel="noreferrer">
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
