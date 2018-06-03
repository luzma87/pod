import * as React from "react";
import {DragSource} from 'react-dnd';

const _ = require('lodash');
import {BlockSize, BlockVariation} from "../../util/types";

export namespace Block {
  export interface Props {
    block: BlockVariation
    week: number
    size: BlockSize
    title: string
    isDragging: boolean
    connectDragSource: any
  }

  export interface State {
    basePath: string
  }
}

const blockSource = {
  beginDrag(props) {
    console.log('begin', props);
    return {
      block: props.block,
      week: props.week,
      size: props.size,
      title: props.title,
    };
  },
  endDrag(props, monitor, component) {
    // console.log('dropped', props, monitor, component);
    console.log('dropped');
    console.log(monitor.getDropResult());
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Block extends React.Component<Block.Props, Block.State> {
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
    const {connectDragSource} = this.props;
    return connectDragSource(<img
      className="block"
      src={this.getFileName(props.week, block.number)}
      title={`W${props.week} - ${this.props.title} - ${block.name}`}
      width={props.size.width}
      height={props.size.height}
    />);
  }
}

export default DragSource('BLOCK', blockSource, collect)(Block);
