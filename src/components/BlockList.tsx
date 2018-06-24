import * as React from 'react';

import blocks from '../assets/blocks';
import BlockCard from "./BlockCard";
import constants from "../util/constants";

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
        {blocks.map(block => {
          let key = `list_${block.week}.${block.number}`;
          if (block.week === null) {
            key = `list_${block.name}`;
          }
          return (<BlockCard
            key={key}
            block={block}
            targetWidth={block.size.width * constants.inchMultiplier}
          />);
        })}
      </div>
    );
  }
}

export default BlockList;
