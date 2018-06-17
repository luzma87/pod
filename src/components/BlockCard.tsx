import * as React from 'react';
import {DragSource, ConnectDragPreview, ConnectDragSource} from 'react-dnd';

import {Block} from "../util/types";
import BlockImage from "./BlockImage";
import {beginDraggingBlock} from "../interactions";

export namespace BlockCard {
  export interface Props {
    block: Block

    isDragging?: boolean
    connectDragSource?: ConnectDragSource
    connectDragPreview?: ConnectDragPreview
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
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class BlockCard extends React.Component<BlockCard.Props, BlockCard.State> {
  render() {
    const {connectDragSource, isDragging, block} = this.props;
    const title = `Week ${block.week} - ${block.name} [${block.type}]`;
    return connectDragSource && connectDragSource(
      <div
        className="card block"
        title={title}
        style={{
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        <BlockImage block={block} />
        <div className="cardContent">
          w.{block.week} [{block.number}]
        </div>
      </div>
    );
  }
}

export default DragSource('BLOCK', blockSource, collect)(BlockCard);
