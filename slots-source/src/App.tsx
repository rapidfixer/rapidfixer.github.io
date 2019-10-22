import React from 'react';

import Reel from './components/Reel';
import Debug, { DebugChangeParams } from './components/Debug';
import Button from './components/Button';
import Input from './components/Input';
import ScoreTable from './components/ScoreTable';

import {
  ReelElement,
  ReelLine,
  ReelValue,
  reelElementsOrder,
  ScoreRecord,
  DebugPositions
} from './types';

import { 
  delaySetState,
  getNextReelElement,
  getPreviousReelElement
} from './helpers';

import style from './App.module.css';
import scoreData from './scoreData';

const REEL_ROTATION_TIME = 2000;
const REEL_DELAY_TIME = 500;
const BLINK_TIME = 2000;
const START_BALANCE = 100;
const MAX_SETTABLE_BALANCE = 5000;
const GAME_PRICE = 1;
const DEBUG_ACTIVE = document.location.hash.includes('debug'); // IN REAL APP SUCH THNIGS SHOULD BE SET IN CODE.

export interface AppState {
  reelsRotating: Array<boolean>;
  generatorValues: ReelValue[];
  debugGeneratorValues: ReelValue[];
  debugPositions: DebugPositions;
  winningScoreIds: number[];
  activeLines: ReelLine[];
  gameInProgress: boolean;
  gameOver: boolean;
  debug: boolean;
  balance: number;
}

export default class App extends React.Component<{}, AppState> {
  // @ts-ignore
  async delaySetState(state: ((AppState) => Partial<AppState>) | Partial<AppState>, delay: number): Promise<any>

  constructor(props: {}) {
    super(props);

    const defaultDebugPositions = 
    [
      {
        element: 'seven' as ReelElement,
        line: 'center' as ReelLine
      },
      {
        element: 'seven' as ReelElement,
        line: 'center' as ReelLine
      },
      {
        element: 'seven' as ReelElement,
        line: 'center' as ReelLine
      }
    ];

    this.state = {
      reelsRotating: [false, false, false],
      generatorValues: this._getRandomReelValues(),
      winningScoreIds: [],
      activeLines: [],
      debugGeneratorValues: this.calculateGeneratorValuesFromDebug(defaultDebugPositions),
      debugPositions: defaultDebugPositions,
      gameInProgress: false,
      gameOver: START_BALANCE <= 0,
      debug: DEBUG_ACTIVE,
      balance: START_BALANCE
    }

    this.delaySetState = delaySetState.bind(this);

    this.onDebugBalanceChange = this.onDebugBalanceChange.bind(this);
    this.onDebugPositionsChange = this.onDebugPositionsChange.bind(this);
  }

  _getRandomReelValues() {
    const result = [] as ReelValue[];
    for (let i = 0; i < 3; i++) {
      // every reel has 5 * 2 = 10 positions. Probability of one-line and two-line cases is 50/50.
      const index = Math.floor(Math.random() * reelElementsOrder.length);
      if (Math.random() < 0.5) { // center line
        result.push({
          center: reelElementsOrder[index]
        });
      } else { // two lines
        // maintain elements order.
        result.push({
          top: reelElementsOrder[index],
          bottom: getNextReelElement(reelElementsOrder[index])
        })
      }
    }
    return result;
  }

  runGameRound() {
    const { balance, debug, debugGeneratorValues } = this.state;
    if (balance < GAME_PRICE) {
      return;
    }

    const generatorValues = debug? debugGeneratorValues : this._getRandomReelValues();
    const roundResults = this.getRoundResults(generatorValues);

    this.setState({
      gameInProgress: true,
      balance: balance - GAME_PRICE,
      reelsRotating: [true, true, true],
      generatorValues
    }, async () => {
      await this.delaySetState({reelsRotating: [false, true, true]}, REEL_ROTATION_TIME);
      await this.delaySetState({reelsRotating: [false, false, true]}, REEL_DELAY_TIME);
      await this.delaySetState({reelsRotating: [false, false, false]}, REEL_DELAY_TIME);
      if (roundResults.score > 0) { // if we win something
        this.setState(prevState => ({
          balance: prevState.balance + roundResults.score,
          winningScoreIds: roundResults.ids,
          activeLines: roundResults.winLines
        }));
        await this.delaySetState({
          gameInProgress: false,
          winningScoreIds: [],
          activeLines: []
        }, BLINK_TIME);
      } else {
        this.setState({
          gameInProgress: false
        });
      }
    })

  }

  getRoundResults(generatorValues: ReelValue[]): {
    ids: number[];
    score: number;
    winLines: ReelLine[];
  } {
    const result = {
      ids: [] as number[],
      score: 0,
      winLines: [] as ReelLine[]
    };
    const mappedValues = {
      'top': generatorValues.map(value => 'top' in value ? value.top : null),
      'center': generatorValues.map(value => 'center' in value ? value.center : null),
      'bottom': generatorValues.map(value => 'bottom' in value ? value.bottom : null)
    }

    function checkCombination(values: Array<ReelElement | null>, combination: ReelElement[]) {
      const valuesCopy = [...values];
      return combination.every(el => {
        const index = valuesCopy.findIndex(val => val === el);
        if (index >= 0) {
          valuesCopy.splice(index, 1);
          return true;
        }
        return false;
      })
    }

    function addScoreToResult(record: ScoreRecord, line: ReelLine) {
      result.ids.push(record.id);
      result.score += record.score;
      if (!result.winLines.includes(line)) {
        result.winLines.push(line);
      }
    }

    scoreData.forEach(record => {
      if (record.line === 'any') {
        Object.keys(mappedValues).forEach(line =>  // check if at least one line...
        {
          if (record.combinations.some( // ...contains at least one combination of this type
            combination => checkCombination(mappedValues[line as ReelLine], combination)
          )) {
            addScoreToResult(record, line as ReelLine);
          }
        });
      }
      else if (record.combinations.some(
          combination => checkCombination(mappedValues[record.line as ReelLine], combination)
        )
      ) {
        addScoreToResult(record, record.line);
      }
    });

    return result;
  }

  calculateGeneratorValuesFromDebug(positions: DebugPositions): ReelValue[] {
    return positions.map(pos => {
      switch (pos.line) {
        case 'center':
            return {
              center: pos.element
            }
        case 'top':
            return {
              top: pos.element,
              bottom: getNextReelElement(pos.element)
            }
        case 'bottom':
            return {
              top: getPreviousReelElement(pos.element),
              bottom: pos.element
            }
      }
    })
  }

  onDebugPositionsChange({reel, element, line}: DebugChangeParams) {
    const currentDebugPositions = [...this.state.debugPositions];

    // updating debugPositions
    let currentPositionValue = currentDebugPositions[reel];
    if (element) {
      currentPositionValue.element = element;
    }
    else if (line) {
      currentPositionValue.line = line;
    }

    currentDebugPositions.splice(reel, 1, currentPositionValue)

    this.setState({
      debugGeneratorValues: this.calculateGeneratorValuesFromDebug(currentDebugPositions),
      debugPositions: currentDebugPositions
    })
  }

  onDebugBalanceChange(name: string, value: string) {
    let newBalance = Number(value);
    if (Number.isInteger(newBalance)) {
      if (newBalance < 0) {
        newBalance = 0;
      }
      if (newBalance > MAX_SETTABLE_BALANCE) {
        newBalance = MAX_SETTABLE_BALANCE;
      }
      this.setState({
        balance: newBalance
      })
    }
  }

  render() {
    const {
      balance,
      gameInProgress,
      debug,
      debugPositions,
      winningScoreIds,
      activeLines,
      reelsRotating,
      generatorValues
    } = this.state;

    return (
      <div className={style.wrapper}>
          <div className={style.slots}>
            {reelsRotating.map((rotation, index) => 
              <Reel
                key={index}
                rotating={rotation}
                activeLines={activeLines}
                value={generatorValues[index]}
              />
            )
            }
          </div>
          <div className={style.balance}>
            <Input
              name="balance"
              value={''+balance}
              readonly={!debug || gameInProgress}
              onChange={this.onDebugBalanceChange}
            />
          </div>
          <div className={style.spinButton}>
            <Button 
              disabled={gameInProgress}
              text="SPIN"
              type="action"
              onClick={this.runGameRound.bind(this)}
            />
          </div>
          <div className={style.table}>
            <ScoreTable activeIds={winningScoreIds}/>
          </div>
          {this.state.debug && <div className={style.debug}>
            <Debug positions={debugPositions} onChange={this.onDebugPositionsChange} />
          </div>}
      </div>
    );
  }
}

