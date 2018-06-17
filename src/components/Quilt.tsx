import * as React from 'react';
import {ConnectDropTarget, DropTarget} from 'react-dnd';
import {doneDraggingBlock, getSelectedBlocks} from "../interactions";
import BlockImage from "./BlockImage";

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number

    connectDropTarget?: ConnectDropTarget
    isOver?: boolean
  }

  export interface State {
  }
}

const blockTarget = {
  drop(props, monitor, component) {
    doneDraggingBlock();
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}


class Quilt extends React.Component<Quilt.Props, Quilt.State> {
  render() {
    const {connectDropTarget, isOver, width, height, multiplier} = this.props;

    const background = isOver ? 'red' : 'whitesmoke';
    return connectDropTarget && connectDropTarget(
      <div
        className="quilt"
        style={{
          background,
          width: width * multiplier,
          height: height * multiplier
        }}
      >
        {getSelectedBlocks().map((block, index) => (
          <BlockImage
            block={block}
            key={`${block.week}.${block.number}.${index}`}
          />
        ))}
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(Quilt);
