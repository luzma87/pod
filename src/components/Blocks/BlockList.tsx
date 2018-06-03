import * as React from "react";

import blocks from './blocks';
import WeekBlocks from "./WeekBlocks";

export namespace BlockList {
  export interface Props {
  }

  export interface State {
  }
}

export default class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  render() {
    return (<div className="blockList">
      {blocks.weeks.map(block => <WeekBlocks
        key={`W-${block.week}`}
        weekBlocks={block}
      />)}
    </div>);
  }
}
