import React from 'react';
import { ReelElement } from '../../types';
import style from './reelIcon.module.css';
import classnames from 'classnames';

export interface ReelIconProps {
  element: ReelElement,
  small?: boolean
}

export default ({element, small}: ReelIconProps) => {

  return (
      <div className={classnames(style.icon, style[element], small && style.small)}>
      </div>
  );
}
