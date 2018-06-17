import * as React from 'react';
import {DragSource, ConnectDragSource} from 'react-dnd';

import {Block} from "../util/types";
import BlockImage from "./BlockImage";
import {beginDraggingBlock} from "../interactions";

export namespace BlockCard {
  export interface Props {
    block: Block

    isDragging?: boolean
    connectDragSource?: ConnectDragSource
  }

  export interface State {
  }
}

const blockSource = {
  beginDrag(props) {
    beginDraggingBlock(props.block);
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class BlockCard extends React.Component<BlockCard.Props, BlockCard.State> {
  render() {
    const {connectDragSource, isDragging, block} = this.props;
    return connectDragSource && connectDragSource(
      <div
        className="card block"
        style={{
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <BlockImage
          block={block}
          targetWidth={100}
        />
        <div className="cardContent">
          w.{block.week} [{block.number}]
        </div>
      </div>
    );
  }
}

export default DragSource('BLOCK', blockSource, collect)(BlockCard);
