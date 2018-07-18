import * as React from 'react';

import { ConnectDropTarget, DropTarget } from 'react-dnd';

import { SelectedBlock } from '../util/types';
import { doneDraggingBlock } from '../interactions';
import BlockQuilt from './BlockQuilt';
import constants from '../util/constants';

export namespace QuiltTarget {
  export interface Props {
    size: number
    block: SelectedBlock
    x: number
    y: number
    onClick: () => void

    connectDropTarget?: ConnectDropTarget
    isOver?: boolean
  }

  export interface State {
    bgColor: string
  }
}

const blockTarget = {
  drop(props, monitor, component) {
    doneDraggingBlock({ x: props.x, y: props.y });
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
    const { connectDropTarget, isOver, size, block, onClick } = this.props;
    const color = isOver ? '#D8BFD8' : '#F5F5F5';
    const borderColor = isOver ? '#8C6AD8' : '#ddd';
    const borderWidth = isOver ? 2 : 0.5;

    let targetWidth = constants.minBlockSize * 8;
    if (block !== null && block.block !== null && block.block !== undefined) {
      targetWidth = block.block.size.width * 8;
    }
    return connectDropTarget && connectDropTarget(
      <div
        className="quiltTarget"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          borderColor,
          borderWidth
        }}
        onClick={() => onClick()}
      >
        <BlockQuilt
          block={block}
          targetWidth={targetWidth}
        />
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(QuiltTarget);
