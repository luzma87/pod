import cursors from './assets/cursors/cursors';

const _ = require('lodash');

import { Block, BlockPosition, SelectedBlock, spellType } from './util/types';

let selectedBlocks: SelectedBlock[] = [];
let shouldClone: boolean = true;
let draggingBlock: SelectedBlock | null = null;
export type BlockObserver = ((blocks: SelectedBlock[]) => void) | null;

let observers: Array<BlockObserver> | null = null;

let action: spellType;

document.body.style.cursor = cursors.bucket;

export const observe = (o: BlockObserver) => {
  if (observers === null) {
    observers = [];
  }
  observers.push(o);
  emitChange();

  return () => {
    observers = null;
  };
};

export const setBlockAction = (newAction: spellType) => {
  action = newAction;
  if (action === null) {
    document.body.style.cursor = cursors.bucket;
  } else {
    document.body.style.cursor = randomWand();
  }
};

export const beginDraggingBlock = (block: Block, position: BlockPosition, clones: boolean) => {
  draggingBlock = { block, position };
  shouldClone = clones;
  emitChange();
};

export const doneDraggingBlock = (position: BlockPosition) => {
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
};

export const getSelectedBlocks = () => {
  return selectedBlocks;
};

export const clickBlock = (position: BlockPosition) => {
  if (action === 'delete') {
    removeBlock(position);
    setBlockAction(null);
  }
  if (action === 'flip') {
    flipBlock(position);
  }
  if (action === 'enlarge') {
    enlargeBlock(position);
  }
};

export const paintMany = (position: BlockPosition, color: string, right: number, down: number) => {
  const posX = position.x;
  const posY = position.y;

  for (let i = 0; i < down; i++) {
    const newPosition: BlockPosition = { x: posX + i, y: posY };
    paintBlock(newPosition, color);
  }

  for (let i = 0; i < right; i++) {
    const newPosition: BlockPosition = { x: posX, y: posY + i };
    paintBlock(newPosition, color);
  }
  emitChange();
};


const emitChange = () => {
  if (observers) {
    for (let i = 0; i < observers.length; i++) {
      const observer = observers[i];
      if (observer) {
        observer(selectedBlocks);
      }
    }
  }
};

const flipBlock = (position: BlockPosition) => {
  for (let i = 0; i < selectedBlocks.length; i++) {
    const b = selectedBlocks[i];
    if (b.position.x === position.x && b.position.y === position.y) {
      b.flipped = !b.flipped;
      break;
    }
  }
  setBlockAction(null);
  emitChange();
};

const enlargeBlock = (position: BlockPosition) => {
  for (let i = 0; i < selectedBlocks.length; i++) {
    const b = selectedBlocks[i];
    if (b.position.x === position.x && b.position.y === position.y) {
      if (b.block) {
        b.block.size.width = 10;
        b.block.size.height = 10;
      }
      break;
    }
  }
  setBlockAction(null);
  emitChange();
};

const removeBlock = (position: BlockPosition) => {
  let indexToRemove: Array<number> = [];
  for (let i = 0; i < selectedBlocks.length; i++) {
    const b = selectedBlocks[i];
    if (b.position.x === position.x && b.position.y === position.y) {
      indexToRemove.push(i);
    }
  }
  let aaa = 0;
  indexToRemove.forEach(index => {
    selectedBlocks.splice(index - aaa, 1);
    aaa += 1;
  });
  emitChange();
};

const paintBlock = (position: BlockPosition, color: string) => {
  let newSelectedBlock: SelectedBlock = {
    color: color,
    position
  };
  selectedBlocks.push(newSelectedBlock);
};

const randomWand = () => {
  // const min = 0;
  let wands = cursors.wands;
  // const max = wands.length;
  // const wandIndex = Math.floor(Math.random() * (max - min) + min);
  const wandIndex = 0;
  return wands[wandIndex];
};
