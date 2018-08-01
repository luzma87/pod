import * as React from 'react';

import { Block } from '../util/types';
import BlockImage from './BlockImage';
import { getDescriptionForBlocksList } from '../util/blockUtils';

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
    return (
      <div className="card block">
        <BlockImage
          shouldClone
          block={block}
          targetWidth={targetWidth}
        />
        <div className="cardContent">
          {getDescriptionForBlocksList(block)}
        </div>
      </div>
    );
  }
}

export default BlockCard;
