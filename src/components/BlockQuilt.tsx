import * as React from 'react';

import {Block} from "../util/types";
import BlockImage from "./BlockImage";

export namespace BlockQuilt {
  export interface Props {
    block: Block
    x: number
    y: number
    targetWidth: number
  }

  export interface State {
  }
}

class BlockQuilt extends React.Component<BlockQuilt.Props, BlockQuilt.State> {
  removeBlock(x, y) {
    // removeBlock(index);
    // this.setState({selectedBlocks: getSelectedBlocks()})
  }

  render() {
    const {block, x, y, targetWidth} = this.props;
    return (
      <div
        className="quiltBlock"
        style={{
          position: 'absolute',
        }}
        onClick={() => this.removeBlock(x, y)}
      >
        <BlockImage
          shouldClone={false}
          targetWidth={targetWidth}
          block={block}
          x={x}
          y={y}
        />
      </div>
    );
  }
}

export default BlockQuilt;
