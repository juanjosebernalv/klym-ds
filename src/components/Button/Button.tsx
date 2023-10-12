import React from 'react';
import './button.scss';
import { Button as ButtonAnt, Space } from 'antd';
import { ButtonProps } from './ButtonProps';

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  type = 'primary',
  ...props
}: ButtonProps) => {
  return (
    // <button
    //   type="button"
    //   className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
    //   style={{ backgroundColor }}
    //   {...props}
    // >
    //   {label}
    // </button>
    <ButtonAnt  className={['storybook_button', `storybook_button__${size}`, `storybook_button__${type}`].join(' ')}>
      {label}
    </ButtonAnt>
  );
};
