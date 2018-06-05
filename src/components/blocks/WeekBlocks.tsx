import * as React from "react";
import {BlockSize, WeekBlock} from "../../util/types";
import Block from "./Block";

export namespace WeekBlocks {
  export interface Props {
    weekBlocks: WeekBlock
    targetSize: number
    onDragStart: (WeekBlock) => void
    onDragReset: () => void
    onDragEnd: () => void
  }

  export interface State {
  }
}

export default class WeekBlocks extends React.Component<WeekBlocks.Props, WeekBlocks.State> {

  getBlockSize(): BlockSize {
    const weekBlocks = this.props.weekBlocks;
    const targetSize = this.props.targetSize;
    const w = weekBlocks.size.width;
    const h = weekBlocks.size.height;
    let ratio = w / targetSize;
    return {width: w / ratio, height: h / ratio};
  }

  render() {
    const weekBlocks = this.props.weekBlocks;
    const week = weekBlocks.week;
    const title = weekBlocks.name;
    return (
      <>
        {weekBlocks.variations.map(block => (
          <Block
            key={`block-${week}-${block.number}`}
            block={block}
            week={week}
            size={this.getBlockSize()}
            title={title}
            onDragStart={(block) => this.props.onDragStart(block)}
            onDragReset={() => this.props.onDragReset()}
            onDragEnd={() => this.props.onDragEnd()}
          />
        ))}
      </>
    );
  }
}
