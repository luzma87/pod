import * as React from "react";

const _ = require('lodash');

import blocks from './blocks';

export namespace BlockList {
  export interface Props {
  }

  export interface State {
    targetSize: number
    baseBlockSize: number
    basePath: string
  }
}

export default class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  constructor(props) {
    super(props);
    this.state = {
      targetSize: 100,
      baseBlockSize: 10,
      basePath: '../../assets/images'
    };
  }

  getFileName(week, variation) {
    const baseFilename = _.padStart(week, 3, '0');
    return `${this.state.basePath}/${baseFilename}-${variation}.svg`;
  }

  getBlocksForWeek(weekBlocks) {
    const targetSize = this.state.targetSize;
    const baseBlockSize = this.state.baseBlockSize;
    const week = weekBlocks.week;
    const width = targetSize * weekBlocks.size.width / baseBlockSize;
    const height = targetSize * weekBlocks.size.height / baseBlockSize;
    return (
      <>
        {weekBlocks.variations.map(block => (
          <img
            className="block"
            src={this.getFileName(week, block.number)}
            width={width}
            height={height}
          />))}
      </>
    );
  }

  render() {
    return (<div className="blockList">
      {blocks.weeks.map(block => {
        return this.getBlocksForWeek(block);
      })}
    </div>);
  }
}
