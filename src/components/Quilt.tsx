import * as React from 'react';
import {ConnectDropTarget, DropTarget} from 'react-dnd';
import {doneDraggingBlock, getSelectedBlocks} from "../interactions";
import {Block} from "../util/types";
import BlockQuilt from "./BlockQuilt";

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number

    connectDropTarget?: ConnectDropTarget
    isOver?: boolean
  }

  export interface State {
    selectedBlocks: Block[]
  }
}

const blockTarget = {
  drop(props, monitor, component) {
    let clientOffset = monitor.getClientOffset();
    doneDraggingBlock(clientOffset);
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

  constructor(props) {
    super(props)
    this.state = {
      selectedBlocks: getSelectedBlocks()
    }
  }

  render() {
    const {connectDropTarget, isOver, width, height, multiplier} = this.props;

    const background = isOver ? 'thistle' : 'whitesmoke';
    return connectDropTarget && connectDropTarget(
      <div
        id="quiltDiv"
        className="quilt"
        style={{
          background,
          width: width * multiplier,
          height: height * multiplier
        }}
      >
        {this.state.selectedBlocks.map((block, index) => {
          let key = `quilt_block_${block.week}.${block.number}.${index}`;
          return (
            <BlockQuilt
              key={key}
              block={block}
              index={index}
              targetWidth={block.size.width * multiplier}
            />
          );
        })}
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(Quilt);
