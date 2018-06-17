import * as React from 'react';

const _ = require('lodash');

import {Block, BlockSize} from "../util/types";

export namespace BlockImage {
  export interface Props {
    block: Block
    targetWidth: number
  }

  export interface State {
  }
}

const basePath = '../assets/images/blocks';

const getFileName = (week: number, number: number): string => {
  const weekPart = _.padStart(week, 3, '0');
  return `${basePath}/${weekPart}-${number}.svg`;
};

class BlockImage extends React.Component<BlockImage.Props, BlockImage.State> {
  getBlockSize(size: BlockSize): BlockSize {
    let ratio = size.width / this.props.targetWidth;
    return {width: size.width / ratio, height: size.height / ratio};
  };

  render() {
    const {block} = this.props;
    const blockSize = this.getBlockSize(block.size);
    const title = `Week ${block.week} - ${block.name} [${block.type}]`;
    return (
      <img
        title={title}
        src={getFileName(block.week, block.number)}
        width={blockSize.width}
        height={blockSize.height}
      />
    );
  }
}

export default BlockImage;
