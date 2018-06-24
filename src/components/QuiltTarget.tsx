import * as React from 'react';

import {ConnectDropTarget, DropTarget} from 'react-dnd';

import '../assets/styles/styles.css';
import {Block} from "../util/types";
import {doneDraggingBlock} from "../interactions";
import BlockQuilt from "./BlockQuilt";

export namespace QuiltTarget {
  export interface Props {
    size: number
    block: Block
    x: number
    y: number

    connectDropTarget?: ConnectDropTarget
    isOver?: boolean
  }

  export interface State {
    bgColor: string
  }
}

const blockTarget = {
  drop(props, monitor, component) {
    doneDraggingBlock({x: props.x, y: props.y});
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class QuiltTarget extends React.Component<QuiltTarget.Props, QuiltTarget.State> {

  render() {
    const {connectDropTarget, isOver, size, x, y, block} = this.props;
    const color = isOver ? '#D8BFD8' : 'transparent';
    const borderColor = isOver ? '#8C6AD8' : '#ddd';
    const borderWidth = isOver ? 2 : 0.5;

    return connectDropTarget && connectDropTarget(
      <div
        className="quiltTarget"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          cursor: 'url(../assets/paint.cur),copy',
          borderColor,
          borderWidth
        }}
      >
        {block !== null ? (
          <BlockQuilt
            block={block}
            x={x}
            y={y}
            targetWidth={block.size.width * 8}
          />
        ) : null}
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(QuiltTarget);
