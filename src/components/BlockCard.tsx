import * as React from 'react';

import {Block} from "../util/types";
import BlockImage from "./BlockImage";

export namespace BlockCard {
  export interface Props {
    block: Block
  }

  export interface State {
  }
}

class BlockCard extends React.Component<BlockCard.Props, BlockCard.State> {

  render() {
    const block = this.props.block;
    const title = `Week ${block.week} - ${block.name} [${block.type}]`;
    return (
      <div
        className="card block"
        title={title}
      >
        <BlockImage block={block} />
        <div className="cardContent">
          w.{block.week} [{block.number}]
        </div>
      </div>
    );
  }
}

export default BlockCard;
