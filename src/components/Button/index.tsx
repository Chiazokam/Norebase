import React from 'react';
import buttonStyles from './Button.module.css';

type ButtonProps = {
  text: string;
  styles: any;
}

const Button = ({ text, styles }: ButtonProps) => {
  return (
    <button className={`${buttonStyles.button} ${styles}`}>{text}</button>
  )
}

export default Button;
