import React from 'react';
import classnames from 'classnames';

import ReelIcon from '../ReelIcon';
import { 
  DebugPositions,
  ReelElement,
  ReelLine,
  reelElementsOrder
} from '../../types';
import style from './debug.module.css';

export interface DebugChangeParams {
  reel: number,
  element?: ReelElement,
  line?: ReelLine
}
export interface DebugProps {
  positions: DebugPositions;
  onChange: (params: DebugChangeParams) => void;
}

export default class Debug extends React.Component<DebugProps> {
  constructor(props: DebugProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event: { currentTarget: HTMLElement; })
  {
    const reelIndex = Number(event.currentTarget.getAttribute('data-reelindex'));
    if(event.currentTarget.classList.contains(style.elementSelect)) { // select reel element
      this.props.onChange({
        reel: reelIndex,
        element: event.currentTarget.getAttribute('data-value') as ReelElement
      })
    } else { // select position
      this.props.onChange({
        reel: reelIndex,
        line: event.currentTarget.getAttribute('data-value') as ReelLine
      })
    }
  }

  render() {
    const {positions} = this.props;

    return (
      <div className={style.wrapper}>
        <table className={style.table}>
          <thead>
            <tr>
              <td colSpan={5}>Reels Value</td>
              <td colSpan={3}>Stop line</td>
            </tr>
          </thead>
          <tbody>
        {positions.map((value, reelIndex) => (
          <tr key={reelIndex}>
            {reelElementsOrder.map((el, index) => (
              <td
                className={classnames(style.elementSelect, value.element === el && style.selected)}
                data-reelindex={reelIndex}
                data-value={el}
                key={el}
                onClick={this.onClick}
                >
                <ReelIcon small element={el}/>
              </td>
            ))}
            <td className={classnames(style.positionSelect, value.line === 'top' && style.selected)}
              data-value={'top'}
              data-reelindex={reelIndex}
              onClick={this.onClick}>
              Top
            </td>
            <td className={classnames(style.positionSelect, value.line === 'center' && style.selected)}
              data-value={'center'}
              data-reelindex={reelIndex}
              onClick={this.onClick}>
              Center
            </td>
            <td className={classnames(style.positionSelect, value.line === 'bottom' && style.selected)}
              data-value={'bottom'}
              data-reelindex={reelIndex}
              onClick={this.onClick}>
              Bottom
            </td>
        </tr>
        ))}
      </tbody>
        </table>
      </div>
    );
  }
}
