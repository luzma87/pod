import * as React from 'react';

import blocks from '../assets/blocks';
import BlockCard from "./BlockCard";

export namespace BlockList {
  export interface Props {
  }

  export interface State {
  }
}

class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  render() {
    return (
      <div className="blockListContainer">
        <div className="searchContainer">
          <input type="text" />
        </div>
        {blocks.map(block => <BlockCard
          key={`list_${block.week}.${block.number}`}
          block={block}
          targetWidth={block.size.width * 8}
        />)}
      </div>
    );
  }
}

export default BlockList;
