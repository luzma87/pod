import * as React from 'react';
import {DragSource, ConnectDragSource, ConnectDragPreview} from 'react-dnd';
import {beginDraggingBlock} from "../interactions";

const _ = require('lodash');

import {Block, BlockSize} from "../util/types";

export namespace BlockImage {
  export interface Props {
    id?: string
    block: Block
    targetWidth: number
    shouldClone: boolean

    isDragging?: boolean
    connectDragSource?: ConnectDragSource
    connectDragPreview?: ConnectDragPreview
  }

  export interface State {
  }
}

const blockSource = {
  beginDrag(props) {
    beginDraggingBlock(props.block, props.shouldClone);
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

const handleStyle: React.CSSProperties = {
  backgroundColor: 'white',
  border: 'solid 1px black',
  width: '1rem',
  height: '1rem',
  cursor: 'move',
  position: 'absolute',
  top: 0,
  left: 0
};

const basePath = '../assets/images/blocks';

const getFileName = (week: number, number: number): string => {
  const weekPart = _.padStart(week, 3, '0');
  return `${basePath}/${weekPart}-${number}.svg`;
};

class BlockImage extends React.Component<BlockImage.Props, BlockImage.State> {
  getBlockSize(size: BlockSize): BlockSize {
    let ratio = size.width / this.props.targetWidth;
    return {width: size.width / ratio, height: size.height / ratio};
  };

  render() {
    const {connectDragSource, connectDragPreview, isDragging, block} = this.props;

    const blockSize = this.getBlockSize(block.size);
    const title = `Week ${block.week} - ${block.name} [${block.type}]`;
    const key = `block_w${block.week}_${block.number}`;
    const id = this.props.id || key;
    return connectDragPreview &&
      connectDragSource &&
      connectDragPreview(
        <div
          style={{
            position: 'relative',
            opacity: isDragging ? 0.5 : 1,
          }}
        >
          {connectDragSource(<div style={handleStyle} />)}
          <img
            id={id}
            title={title}
            src={getFileName(block.week, block.number)}
            width={blockSize.width}
            height={blockSize.height}
          />
        </div>
      );
  }
}

export default DragSource('BLOCK', blockSource, collect)(BlockImage);
