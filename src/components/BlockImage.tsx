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
    showHandle: boolean
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

const basePath = '../assets/images/blocks';

const getFileName = (week: number, number: number): string => {
  const weekPart = _.padStart(week, 3, '0');
  return `${basePath}/${weekPart}-${number}.svg`;
};

class BlockImage extends React.Component<BlockImage.Props, BlockImage.State> {
  constructor(props) {
    super(props);
    this.state = {
      showHandle: false
    }
  }

  getBlockSize(size: BlockSize): BlockSize {
    let ratio = size.width / this.props.targetWidth;
    return {width: size.width / ratio, height: size.height / ratio};
  };

  setShowHandle(value: boolean) {
    this.setState({showHandle: value});
  }

  render() {
    const {connectDragSource, connectDragPreview, isDragging, block} = this.props;

    const blockSize = this.getBlockSize(block.size);
    const title = `Week ${block.week} - ${block.name} (${block.type}) [${block.size.width}"x${block.size.height}"]`;
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
          {connectDragSource(<div
            className="blockHandle"
            style={{
              opacity: this.state.showHandle ? 1 : 0
            }}
            onMouseEnter={() => this.setShowHandle(true)}
            onMouseLeave={() => this.setShowHandle(false)}
          />)}
          <img
            id={id}
            title={title}
            src={getFileName(block.week, block.number)}
            width={blockSize.width}
            height={blockSize.height}
            onMouseEnter={() => this.setShowHandle(true)}
            onMouseLeave={() => this.setShowHandle(false)}
          />
        </div>
      );
  }
}

export default DragSource('BLOCK', blockSource, collect)(BlockImage);
