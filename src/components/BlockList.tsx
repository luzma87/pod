import * as React from 'react';

import weeklyBlocks from '../assets/weeklyBlocks';
import supplementalBlocks from '../assets/supplementalBlocks';
import BlockCard from './BlockCard';
import constants from '../util/constants';
import { getBlockKey } from '../util/blockUtils';

export namespace BlockList {
  export interface Props {
  }

  export interface State {
  }
}

class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  render() {
    const blocks = [
      ...weeklyBlocks,
      ...supplementalBlocks
    ];
    return (
      <div className="blockListContainer">
        {blocks.map(block => {
          return (<BlockCard
            key={getBlockKey(block, 'list')}
            block={block}
            targetWidth={block.size.width * constants.inchMultiplier}
          />);
        })}
      </div>
    );
  }
}

export default BlockList;
