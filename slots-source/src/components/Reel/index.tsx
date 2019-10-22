import React from 'react';

import ReelIcon from '../ReelIcon';
import {
  ReelValue,
  reelElementsOrder, 
  ReelLine} from '../../types';
import style from './reel.module.css';
import classnames from 'classnames';

export interface ReelProps {
  activeLines: ReelLine[];
  rotating: boolean;
  value: ReelValue;
}

export default class Reel extends React.Component<ReelProps> {

  render() {
    const {rotating, value, activeLines} = this.props;

    const valueElement = 'center' in value
      ? value.center
      : value.top;
    const valueLine = 'center' in value
      ? 'center'
      : 'top';

    return (
      <div className={style.wrapper}>
        <div className={style.window}>
          <div className={classnames(style.checkline, style.topline, activeLines.includes('top') && style.activeline)}></div>
          <div className={classnames(style.checkline, style.midline, activeLines.includes('center') && style.activeline)}></div>
          <div className={classnames(style.checkline, style.bottomline, activeLines.includes('bottom') && style.activeline)}></div>
          <div className={classnames(style.bar, style[valueElement], style[valueLine], rotating && style.rotating)}>
            <ReelIcon element={'cherry'} />
            {reelElementsOrder.map((el, index) =>
              <ReelIcon element={el} key={index}/>
            )}
              <ReelIcon element={'tripleBar'} />
          </div>
        </div>
          
            <div className={style.checkLine}></div>
      </div>
    );
  }
}
