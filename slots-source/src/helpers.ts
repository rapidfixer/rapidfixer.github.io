import { reelElementsOrder, ReelElement } from "./types";

export async function delaySetState(arg: object | Function, timeout: number) {
    return new Promise(resolve => setTimeout(() => {
        // @ts-ignore
        this.setState(arg, resolve);
      }, timeout));
}

export function getNextReelElement(element: ReelElement): ReelElement {
    const nextElementIndex = reelElementsOrder.findIndex(el => el === element) + 1;
    return nextElementIndex < reelElementsOrder.length
            ? reelElementsOrder[nextElementIndex]
            : reelElementsOrder[0]
}

export function getPreviousReelElement(element: ReelElement): ReelElement {
    const prevElementIndex = reelElementsOrder.findIndex(el => el === element) - 1;
    return prevElementIndex < 0
            ? reelElementsOrder[reelElementsOrder.length - 1]
            : reelElementsOrder[prevElementIndex]
}