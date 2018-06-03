import * as React from "react";
import {BlockSize, WeekBlock} from "../../util/types";
import Block from "./Block";

export namespace WeekBlocks {
  export interface Props {
    weekBlocks: WeekBlock
  }

  export interface State {
    targetSize: number
    baseBlockSize: number
    basePath: string
  }
}

export default class WeekBlocks extends React.Component<WeekBlocks.Props, WeekBlocks.State> {
  constructor(props) {
    super(props);
    this.state = {
      targetSize: 100,
      baseBlockSize: 10,
      basePath: '../../assets/images'
    };
  }

  render() {
    const weekBlocks = this.props.weekBlocks;
    const targetSize = this.state.targetSize;
    const baseBlockSize = this.state.baseBlockSize;
    const week = weekBlocks.week;
    const width = targetSize * weekBlocks.size.width / baseBlockSize;
    const height = targetSize * weekBlocks.size.height / baseBlockSize;
    const size: BlockSize = {width, height};
    const title = weekBlocks.name;
    return (
      <>
        {weekBlocks.variations.map(block => (
          <Block
            key={`block-${week}-${block.number}`}
            block={block}
            week={week}
            size={size}
            title={title}
          />
        ))}
      </>
    );
  }
}
