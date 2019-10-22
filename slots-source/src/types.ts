export const reelElementsOrder = ['tripleBar', 'singleBar', 'doubleBar', 'seven', 'cherry'] as ReelElement[];

export type ReelElement = 'tripleBar' | 'singleBar' | 'doubleBar' | 'seven' | 'cherry';
export type ReelLine = 'top' | 'center' | 'bottom';
export type ReelValue = {
    top: ReelElement,
    bottom: ReelElement
} | {
  center: ReelElement
}

export interface ScoreRecord {
  id: number;
  line: ReelLine | 'any';
  score: number;
  combinations: [Array<ReelElement>];
}
export type ScoreData = Array<ScoreRecord>

export type DebugPositions = Array<{
  line: ReelLine;
  element: ReelElement;
}>