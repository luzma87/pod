import * as React from 'react';

import { Block } from '../util/types';
import BlockImage from './BlockImage';

export namespace BlockCard {
  export interface Props {
    block: Block
    targetWidth: number
  }

  export interface State {
  }
}

class BlockCard extends React.Component<BlockCard.Props, BlockCard.State> {
  render() {
    const { block, targetWidth } = this.props;
    let title = block.week === null || block.week === undefined ? '' : `w.${block.week} [${block.number}] `;
    title += block.name;
    return (
      <div
        className="card block"
      >
        <BlockImage
          shouldClone
          block={block}
          targetWidth={targetWidth}
        />
        <div className="cardContent">
          {title}
        </div>
      </div>
    );
  }
}

export default BlockCard;
