import * as React from 'react';

import { SelectedBlock } from '../util/types';
import BlockImage from './BlockImage';
import { clickBlock, setBlockAction } from '../interactions';

export namespace BlockQuilt {
  export interface Props {
    block: SelectedBlock
    targetWidth: number
  }

  export interface State {
  }
}

class BlockQuilt extends React.Component<BlockQuilt.Props, BlockQuilt.State> {
  getContent() {
    const { block, targetWidth } = this.props;
    let x, y;
    if (block !== null) {
      x = block.position.x;
      y = block.position.y;
    }

    if (block !== null) {
      if (block.block !== null && block.block !== undefined) {
        return (
          <BlockImage
            shouldClone={false}
            targetWidth={targetWidth}
            block={block.block}
            isFlipped={block.flipped}
            x={x}
            y={y}
          />
        );
      }
      if (block.color !== null && block.color !== undefined) {
        const size = targetWidth;
        return (
          <div
            style={{
              width: size,
              height: size,
              backgroundColor: block.color
            }}
          />
        );
      }
    }
    return null;
  }

  handleClickBlock(e) {
    const { block } = this.props;
    let x, y;
    if (block !== null) {
      x = block.position.x;
      y = block.position.y;
    }
    if (block.color) {
      setBlockAction('delete');
    }
    e.stopPropagation();
    clickBlock({ x, y });
  }

  render() {
    return (
      <div
        className="quiltBlock"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 5
        }}
        onClick={(e) => this.handleClickBlock(e)}
      >
        {this.getContent()}
      </div>
    );
  }
}

export default BlockQuilt;
