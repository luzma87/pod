import * as React from 'react';
import {ConnectDropTarget, DropTarget} from 'react-dnd';
import {doneDraggingBlock, getSelectedBlocks, removeBlock} from "../interactions";
import BlockImage from "./BlockImage";
import {Block} from "../util/types";

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

  constructor(props) {
    super(props)
    this.state = {
      selectedBlocks: getSelectedBlocks()
    }
  }

  removeBlock(index) {
    removeBlock(index);
    this.setState({selectedBlocks: getSelectedBlocks()})
  }

  render() {
    const {connectDropTarget, isOver, width, height, multiplier} = this.props;

    const background = isOver ? 'thistle' : 'whitesmoke';
    return connectDropTarget && connectDropTarget(
      <div
        className="quilt"
        style={{
          background,
          width: width * multiplier,
          height: height * multiplier
        }}
      >
        {this.state.selectedBlocks.map((block, index) => (
          <div
            key={`${block.week}.${block.number}.${index}`}
            className="quiltBlock"
            onClick={() => this.removeBlock(index)}
          >
            <BlockImage
              targetWidth={block.size.width * multiplier}
              block={block}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(Quilt);
