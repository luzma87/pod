import * as React from 'react';

const _ = require('lodash');

import {Block, BlockSize} from "../util/types";

export namespace BlockImage {
  export interface Props {
    block: Block
  }

  export interface State {
  }
}

const basePath = '../assets/images';
const targetBlockSize = 100;

const getFileName = (week: number, number: number): string => {
  const weekPart = _.padStart(week, 3, '0');
  return `${basePath}/${weekPart}-${number}.svg`;
};

const getBlockSize = (size: BlockSize): BlockSize => {
  let ratio = size.width / targetBlockSize;
  return {width: size.width / ratio, height: size.height / ratio};
};

class BlockImage extends React.Component<BlockImage.Props, BlockImage.State> {
  render() {
    const {block} = this.props;
    const blockSize = getBlockSize(block.size);
    return (
      <img
        src={getFileName(block.week, block.number)}
        width={blockSize.width}
        height={blockSize.height}
      />
    );
  }
}

export default BlockImage;
