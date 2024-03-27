import React from 'react';
import { Link } from 'react-scroll';
import styles from './ButtonSection.module.scss';

const ButtonSection = ({ text, toSectionId, buttonClassName, duration = 500 }) => {
  return (
    <Link
      to={toSectionId}
      spy={true}
      smooth={true}
      offset={-70}
      duration={duration}
      className={`${styles.button} ${buttonClassName}`}
    >
      {text}
    </Link>
  );
};

export default ButtonSection;
