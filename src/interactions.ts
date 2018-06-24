const _ = require('lodash');

import { Block, BlockPosition, SelectedBlock } from './util/types';

let selectedBlocks: SelectedBlock[] = [];
let shouldClone: boolean = true;
let draggingBlock: SelectedBlock | null = null;
export type BlockObserver = ((blocks: SelectedBlock[]) => void) | null;
let observer: BlockObserver = null;

function emitChange() {
  if (observer) {
    observer(selectedBlocks);
  }
}

export function observe(o: BlockObserver) {
  if (observer) {
    throw new Error('Multiple observers not implemented. :(');
  }
  observer = o;
  emitChange();

  return () => {
    observer = null;
  };
}

export function getSelectedBlocks() {
  return selectedBlocks;
}

export function beginDraggingBlock(block: Block, position: BlockPosition, clones: boolean) {
  draggingBlock = { block, position };
  shouldClone = clones;
  emitChange();
}

export function doneDraggingBlock(position: BlockPosition) {
  if (draggingBlock !== null) {
    let newBlock = _.cloneDeep(draggingBlock);
    newBlock.position = position;
    if (shouldClone) {
      selectedBlocks.push(newBlock);
    } else {
      for (let i = 0; i < selectedBlocks.length; i++) {
        const b = selectedBlocks[i];
        if (b.position.x === draggingBlock.position.x && b.position.y === draggingBlock.position.y) {
          b.position = position;
        }
      }
    }
    draggingBlock = null;
    emitChange();
  }
}

export function paintBlock(position: BlockPosition, color: string) {
  let newSelectedBlock: SelectedBlock = {
    color: color,
    position
  };
  selectedBlocks.push(newSelectedBlock);
  emitChange();
}

export function removeBlock(position: BlockPosition) {
  let indexToRemove: number | null = null;
  for (let i = 0; i < selectedBlocks.length; i++) {
    const b = selectedBlocks[i];
    if (b.position.x === position.x && b.position.y === position.y) {
      indexToRemove = i;
    }
  }
  if (indexToRemove !== null) {
    selectedBlocks.splice(indexToRemove, 1);
    emitChange();
  }
}
