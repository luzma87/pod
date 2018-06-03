import * as React from "react";

const _ = require('lodash');
import {BlockSize, BlockVariation} from "../../util/types";

export namespace Block {
  export interface Props {
    block: BlockVariation
    week: number
    size: BlockSize
    title: string
  }

  export interface State {
    basePath: string
  }
}

export default class Block extends React.Component<Block.Props, Block.State> {
  constructor(props) {
    super(props);
    this.state = {
      basePath: '../../assets/images'
    };
  }

  getFileName(week, variation) {
    const baseFilename = _.padStart(week, 3, '0');
    return `${this.state.basePath}/${baseFilename}-${variation}.svg`;
  }

  render() {
    let props = this.props;
    let block = props.block;
    return <img
      className="block"
      src={this.getFileName(props.week, block.number)}
      title={`W${props.week} - ${this.props.title} - ${block.name}`}
      width={props.size.width}
      height={props.size.height}
    />;
  }
}
