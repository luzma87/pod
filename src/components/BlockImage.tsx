import * as React from 'react';
import { DragSource, ConnectDragSource, ConnectDragPreview } from 'react-dnd';
import { beginDraggingBlock } from '../interactions';

const _ = require('lodash');

import { Block, BlockSize } from '../util/types';
import constants from '../util/constants';

export namespace BlockImage {
  export interface Props {
    block: Block
    targetWidth: number
    shouldClone: boolean
    x?: number
    y?: number
    isFlipped?: boolean

    isDragging?: boolean
    connectDragSource?: ConnectDragSource
    connectDragPreview?: ConnectDragPreview
  }

  export interface State {
    showHandle: boolean
    showFlipHandle: boolean
  }
}

const blockSource = {
  beginDrag(props) {
    beginDraggingBlock(props.block, { x: props.x, y: props.y }, props.shouldClone);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

const basePath = constants.baseImagesPath;

const getFileName = (block: Block): string => {
  const week = block.week;
  const number = block.number;
  const blockFolder = block.type === 'original' || block.type === 'variation' ? 'weekly' : block.type;
  if (week !== null && week !== undefined && number !== null && number !== undefined) {
    const weekPart = _.padStart(week, 3, '0');
    return `${basePath}/${blockFolder}/${weekPart}-${number}.svg`;
  }
  if (block.file !== null && block.file !== undefined) {
    return `${basePath}/${blockFolder}/${block.file}.svg`;
  }
  return '';
};

const getTitle = (block: Block): string => {
  const spacing = '    ';
  const weekTitle = block.week === null || block.week === undefined
    ? ''
    : `Week ${block.week} - `;
  const designer = block.designer !== undefined ? `\n${spacing}by ${block.designer}` : '';
  const embroidery = block.hasEmbroidery === true ? `\n${spacing}[has embroidery]` : '';
  return `${weekTitle}${block.name} (${block.type})\n${spacing}[${block.size.width}"x${block.size.height}"]${embroidery}${designer}`;
};

class BlockImage extends React.Component<BlockImage.Props, BlockImage.State> {
  constructor(props) {
    super(props);
    this.state = {
      showHandle: false,
      showFlipHandle: false
    };
  }

  getBlockSize(size: BlockSize): BlockSize {
    let ratio = size.width / this.props.targetWidth;
    return { width: size.width / ratio, height: size.height / ratio };
  };

  setShowHandle(value: boolean) {
    this.setState({ showHandle: value });
  }

  setShowFlipHandle(value: boolean) {
    this.setState({ showFlipHandle: value });
  }

  render() {
    const { connectDragSource, connectDragPreview, isDragging, shouldClone, block, isFlipped } = this.props;
    const { showHandle } = this.state;
    const blockSize = this.getBlockSize(block.size);
    const key = `block_w${block.week}_${block.number}`;
    let isVisible = isDragging && shouldClone || !isDragging;
    const flippedStyle = isFlipped ? {
      transform: 'scaleX(-1)',
      filter: 'FlipH'
    } : {};
    return connectDragPreview &&
      connectDragSource &&
      connectDragPreview(
        <div
          style={{
            position: 'relative',
            opacity: isDragging ? 0.5 : 1
          }}
        >
          {connectDragSource(<div
            className="blockHandle"
            style={{
              opacity: showHandle ? 1 : 0
            }}
            onMouseEnter={() => this.setShowHandle(true)}
            onMouseLeave={() => this.setShowHandle(false)}
          />)}
          {isVisible ? (
            <img
              style={{
                zIndex: 1,
                ...flippedStyle
              }}
              id={key}
              title={getTitle(block)}
              src={getFileName(block)}
              width={blockSize.width}
              height={blockSize.height}
              onMouseEnter={() => {
                this.setShowHandle(true);
                this.setShowFlipHandle(true);
              }}
              onMouseLeave={() => {
                this.setShowHandle(false);
                this.setShowFlipHandle(false);
              }}
            />
          ) : null}
        </div>
      );
  }
}

export default DragSource('BLOCK', blockSource, collect)(BlockImage);
