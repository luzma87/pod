import * as React from 'react';
import {Block, SelectedBlock} from "../util/types";
import constants from "../util/constants";
import QuiltTarget from "./QuiltTarget";
import {getSelectedBlocks} from "../interactions";
import {observe} from "../interactions";

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number
  }

  export interface State {
    selectedBlocks: SelectedBlock[]
  }
}

class Quilt extends React.Component<Quilt.Props, Quilt.State> {

  constructor(props) {
    super(props);
    observe(this.handleChange.bind(this));
    this.state = {
      selectedBlocks: getSelectedBlocks()
    }
  }

  unobserve() {
    observe(this.handleChange.bind(this));
  }

  componentWillUnmount() {
    this.unobserve();
  }

  handleChange(selectedBlocks: SelectedBlock[]) {
    const nextState = {selectedBlocks};
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  matrix(w, h) {
    const {multiplier} = this.props;

    let elems: Object[] = [];
    let selectedBlocks = this.state.selectedBlocks;

    for (let x = 0; x < h; x++) {
      for (let y = 0; y < w; y++) {
        let block: Block | null = null;
        for (let b = 0; b < selectedBlocks.length; b++) {
          if (selectedBlocks[b].position.x === x && selectedBlocks[b].position.y === y) {
            block = selectedBlocks[b].block;
          }
        }
        elems.push(<QuiltTarget
          key={`${x}.${y}`}
          size={constants.minBlockSize * multiplier}
          block={block}
          x={x}
          y={y}
        />)
      }
    }
    return <>{elems}</>;
  }

  render() {
    const {width, height, multiplier} = this.props;
    const minBlockSize = constants.minBlockSize;
    let horizontalAmountOfBlocks = Math.ceil(width / minBlockSize);
    let verticalAmountOfBlocks = Math.ceil(height / minBlockSize);
    const adjustedWidth = horizontalAmountOfBlocks * minBlockSize;
    const adjustedHeight = verticalAmountOfBlocks * minBlockSize;

    const quiltWidth = adjustedWidth * multiplier;
    const quiltHeight = adjustedHeight * multiplier;


    const background = 'whitesmoke';
    return (
      <div
        id="quiltDiv"
        className="quilt"
        style={{
          background,
          width: quiltWidth,
          height: quiltHeight,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        {this.matrix(horizontalAmountOfBlocks, verticalAmountOfBlocks)}
      </div>
    );
  }
}

export default Quilt;
