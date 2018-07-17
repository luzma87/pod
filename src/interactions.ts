import cursors from './assets/cursors/cursors';

const _ = require('lodash');

import { Block, BlockPosition, SelectedBlock, spellType } from './util/types';

let selectedBlocks: SelectedBlock[] = [];
let shouldClone: boolean = true;
let draggingBlock: SelectedBlock | null = null;
export type BlockObserver = ((blocks: SelectedBlock[]) => void) | null;
let observer: BlockObserver = null;

let action: spellType;

document.body.style.cursor = cursors.bucket;

function randomWand() {
  const min = 0;
  let wands = cursors.wands;
  const max = wands.length;
  const wandIndex = Math.floor(Math.random() * (max - min) + min);
  return wands[wandIndex];
}

function emitChange() {
  if (observer) {
    observer(selectedBlocks);
  }
}

export function setBlockAction(newAction: spellType) {
  action = newAction;
  if (action === null) {
    document.body.style.cursor = cursors.bucket;
  } else {
    document.body.style.cursor = randomWand();
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

function paintBlock(position: BlockPosition, color: string) {
  let newSelectedBlock: SelectedBlock = {
    color: color,
    position
  };
  selectedBlocks.push(newSelectedBlock);
}

export function paintMany(position: BlockPosition, color: string, right: number, down: number) {
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
}

export function clickBlock(position: BlockPosition) {
  console.log('click', action, position);
  if (action === 'delete') {
    removeBlock(position);
    setBlockAction(null);
  }
  if (action === 'flip') {
    flipBlock(position);
  }
}

function flipBlock(position: BlockPosition) {
  for (let i = 0; i < selectedBlocks.length; i++) {
    const b = selectedBlocks[i];
    if (b.position.x === position.x && b.position.y === position.y) {
      b.flipped = !b.flipped;
      break;
    }
  }
  setBlockAction(null);
  emitChange();
}

function removeBlock(position: BlockPosition) {
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
