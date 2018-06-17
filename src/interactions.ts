import {Block} from "./util/types";

let selectedBlocks: Block[] = [];
let draggingBlock: Block | null = null;
export type BlockObserver = ((blocks: Block[]) => void) | null;
let observer: BlockObserver = null;

function emitChange() {
  if (observer) {
    observer(selectedBlocks);
  }
}

export function observe(o: BlockObserver) {
  if (observer) {
    throw new Error('Multiple observers not implemented.')
  }
  observer = o;
  emitChange();

  return () => {
    observer = null;
  }
}

export function getSelectedBlocks() {
  return selectedBlocks;
}

export function beginDraggingBlock(block: Block) {
  draggingBlock = block;
}

export function doneDraggingBlock() {
  if (draggingBlock !== null) {
    selectedBlocks.push(draggingBlock);
    draggingBlock = null;
    emitChange();
  }
}
