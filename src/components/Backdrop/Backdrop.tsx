import * as React from 'react';
import { BackdropProps } from './Backdrop.type';
import './Backdrop.css';

const Backdrop: React.StatelessComponent<BackdropProps> = ({
  backdropStyles,
  backdropClassName,
  onClose,
}) => (
  <div
    className={`c-modal--backdrop ${backdropClassName || ''}`}
    style={{
      ...backdropStyles,
    }}
    onClick={onClose}
  />
);

export default Backdrop;
