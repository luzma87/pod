import * as React from 'react';

import {SelectedBlock} from "../util/types";
import BlockImage from "./BlockImage";
import {removeBlock} from "../interactions";

export namespace BlockQuilt {
  export interface Props {
    block: SelectedBlock
    targetWidth: number
  }

  export interface State {
  }
}

class BlockQuilt extends React.Component<BlockQuilt.Props, BlockQuilt.State> {
  render() {
    const {block, targetWidth} = this.props;
    const {x, y} = block.position;
    return (
      <div
        className="quiltBlock"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5
        }}
        onClick={(e) => {
          e.stopPropagation();
          removeBlock({x, y})
        }}
      >
        {block.block !== null && block.block !== undefined ? (<BlockImage
          shouldClone={false}
          targetWidth={targetWidth}
          block={block.block}
          x={x}
          y={y}
        />) : "C"}
      </div>
    );
  }
}

export default BlockQuilt;
