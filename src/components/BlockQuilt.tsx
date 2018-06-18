import * as React from 'react';

import {Block} from "../util/types";
import BlockImage from "./BlockImage";
import {getSelectedBlocks, removeBlock} from "../interactions";

export namespace BlockQuilt {
  export interface Props {
    block: Block
    index: number
    targetWidth: number
  }

  export interface State {
  }
}

class BlockQuilt extends React.Component<BlockQuilt.Props, BlockQuilt.State> {
  removeBlock(index) {
    removeBlock(index);
    this.setState({selectedBlocks: getSelectedBlocks()})
  }

  render() {
    const {block, index, targetWidth} = this.props;
    return (
      <div
        className="quiltBlock"
        style={{
          position: 'absolute',
          top: block.position ? block.position.y : 0,
          left: block.position ? block.position.x : 0
        }}
        onClick={() => this.removeBlock(index)}
      >
        <BlockImage
          shouldClone={false}
          targetWidth={targetWidth}
          block={block}
        />
      </div>
    );
  }
}

export default BlockQuilt;
