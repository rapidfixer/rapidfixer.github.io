import React from 'react';


import scoreData from '../../scoreData';
import ReelIcon from '../ReelIcon';
import style from './scoreTable.module.css';
import classnames from 'classnames';

export interface ScoreTableProps {
  activeIds: number[];
}

export default ({activeIds}: ScoreTableProps) => (
  <div className={style.wrapper}>
    <table>
      <tbody>
        {scoreData.map(record => (
          <tr
            className={classnames(style.row, activeIds.includes(record.id) && style.activeRow)}
            key={record.id}>
            <td className={style.elements}>
              {record.combinations.map((combination, index) => (
                <div className={style.combination} key={index}>
                  {combination.map(
                    (element, index) => <ReelIcon small element={element} key={index}/>
                  )}
                </div>
              ))}
            </td>
            <td className={style.line}>{record.line}</td>
            <td className={style.score}>{record.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
