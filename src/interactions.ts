import snapToGrid from "./util/snapToGrid";

const _ = require('lodash');

import {Block, BlockPosition} from "./util/types";
import constants from "./util/constants";

let selectedBlocks: Block[] = [];
let shouldClone: boolean = true;
let draggingBlock: Block | null = null;
export type BlockObserver = ((blocks: Block[]) => void) | null;
let observer: BlockObserver = null;

function emitChange() {
  if (observer) {
    observer(selectedBlocks);
  }
}

export function getSelectedBlocks() {
  return selectedBlocks;
}

export function beginDraggingBlock(block: Block, clones: boolean) {
  draggingBlock = block;
  shouldClone = clones;
  emitChange();
}

export function doneDraggingBlock(position: BlockPosition) {
  let elementById = document.getElementById('quiltDiv');
  let referenceTop = 0;
  let referenceLeft = 0;
  if (elementById !== null) {
    let rect = elementById.getBoundingClientRect();
    referenceTop = rect.top;
    referenceLeft = rect.left;
  }
  if (draggingBlock !== null) {
    let newBlock;
    if (shouldClone) {
      newBlock = _.cloneDeep(draggingBlock);
    } else {
      newBlock = draggingBlock;
    }
    const gridSize = constants.minBlockSize * constants.inchMultiplier;
    let snapToGrid1 = snapToGrid(position.x, position.y, referenceLeft, referenceTop, gridSize);
    console.log(snapToGrid1);
    newBlock.position = {
      x: snapToGrid1[0],
      y: snapToGrid1[1]
    };
    console.log("new block", newBlock.position);
    if (shouldClone) {
      selectedBlocks.push(newBlock);
    }
    draggingBlock = null;
    emitChange();
  }
}

export function removeBlock(index: number) {
  selectedBlocks.splice(index, 1);
  emitChange();
}
