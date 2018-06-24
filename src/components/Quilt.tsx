import * as React from 'react';
import { BlockPosition, SelectedBlock } from '../util/types';
import constants from '../util/constants';
import QuiltTarget from './QuiltTarget';
import { getSelectedBlocks, paintBlock } from '../interactions';
import { observe } from '../interactions';
import ColorPicker from './colorPicker/ColorPicker';

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number
  }

  export interface State {
    selectedBlocks: SelectedBlock[]
    colorPickerOpen: boolean
    clickedTarget: BlockPosition | null
  }
}

class Quilt extends React.Component<Quilt.Props, Quilt.State> {

  constructor(props) {
    super(props);
    observe(this.handleChange.bind(this));
    this.state = {
      selectedBlocks: getSelectedBlocks(),
      colorPickerOpen: false,
      clickedTarget: null
    };
  }

  unobserve() {
    observe(this.handleChange.bind(this));
  }

  componentWillUnmount() {
    this.unobserve();
  }

  handleChange(selectedBlocks: SelectedBlock[]) {
    const nextState = { selectedBlocks };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = { ...nextState, ...{ colorPickerOpen: false, clickedTarget: null } };
    }
  }

  handleTargetClick(position: BlockPosition) {
    this.setState({ colorPickerOpen: true, clickedTarget: position });
  }

  handleClosePicker() {
    this.setState({ colorPickerOpen: false, clickedTarget: null });
  }

  handleColorSelect(color: string) {
    let clickedTarget = this.state.clickedTarget;
    if (clickedTarget !== null) {
      paintBlock(clickedTarget, color);
    }
    this.handleClosePicker();
  }

  matrix(w, h) {
    const { multiplier } = this.props;

    let elems: Object[] = [];
    let selectedBlocks = this.state.selectedBlocks;

    for (let x = 0; x < h; x++) {
      for (let y = 0; y < w; y++) {
        let block: SelectedBlock | null = null;
        for (let b = 0; b < selectedBlocks.length; b++) {
          if (selectedBlocks[b].position.x === x && selectedBlocks[b].position.y === y) {
            block = selectedBlocks[b];
          }
        }
        elems.push(<QuiltTarget
          onClick={() => this.handleTargetClick({ x, y })}
          key={`${x}.${y}`}
          size={constants.minBlockSize * multiplier}
          block={block}
          x={x}
          y={y}
        />);
      }
    }
    return <>{elems}</>;
  }

  render() {
    const { width, height, multiplier } = this.props;
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
        <ColorPicker
          open={this.state.colorPickerOpen}
          onClose={() => this.handleClosePicker()}
          onSelect={(color) => this.handleColorSelect(color)}
        />
      </div>
    );
  }
}

export default Quilt;
