import * as React from "react";
import {DropTarget} from 'react-dnd';
import {WeekBlock} from "../../util/types";

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number
    connectDropTarget: any
    isOver: boolean
    selectedBlocks: Array<WeekBlock>
  }

  export interface State {
  }
}

const blockTarget = {
  drop(props, monitor, component) {
    console.log('dropped QUILT', props, monitor, component);
    return {
      type: 'quilt'
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class Quilt extends React.Component<Quilt.Props, Quilt.State> {
  render() {
    const {connectDropTarget, isOver} = this.props;
    const background = isOver ? 'red' : 'white';
    let props = this.props;
    return connectDropTarget(
      <div
        style={{
          background,
          marginTop: 15,
          border: "solid 1px #555",
          width: props.width * props.multiplier,
          height: props.height * props.multiplier
        }}
      >
        {this.props.selectedBlocks.map((block, index) =>
          <div key={`qb-${index}`}>{block.name}</div>)}
      </div>
    );
  }
}

export default DropTarget('BLOCK', blockTarget, collect)(Quilt);
