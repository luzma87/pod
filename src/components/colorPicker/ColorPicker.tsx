import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import { SketchPicker } from 'react-color';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import constants from '../../util/constants';

export namespace ColorPicker {
  export interface Props {
    open: boolean
    onClose: () => void
    onSelect: (color: string, right: number, down: number) => void
  }

  export interface State {
    selectedColor: string
    right: number
    down: number
  }
}

class ColorPicker extends React.Component<ColorPicker.Props, ColorPicker.State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: '#abcdef',
      right: 1,
      down: 1
    };
  }

  handleChangeComplete(color) {
    this.setState({ selectedColor: color.hex });
  }

  handleChangeBlocks(direction: 'right' | 'down', event) {
    const newValue = {};
    newValue[direction] = event.target.value;
    this.setState(newValue);
  }

  input(direction: 'right' | 'down', icon) {
    const id = `blocks-${direction}`;
    const label = `Blocks ${direction}`;
    const value = this.state[direction];

    return (
      <FormControl>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Input
          id={id}
          value={value}
          type="number"
          onChange={(event) => this.handleChangeBlocks(direction, event)}
          startAdornment={
            <InputAdornment position="start">
              {icon}
            </InputAdornment>
          }
        />
      </FormControl>
    );
  };

  render() {
    const { onClose, onSelect, ...other } = this.props;

    const { selectedColor, down, right } = this.state;

    return (
      <Dialog {...other}>
        <SketchPicker
          disableAlpha
          color={this.state.selectedColor}
          presetColors={constants.materialPalette}
          onChangeComplete={(color) => this.handleChangeComplete(color)}
        />
        <div style={{ padding: 15 }}>
          <div>
            {this.input('right', <ArrowForward />)}
          </div>
          <div>
            {this.input('down', <ArrowDownward />)}
          </div>
        </div>
        <DialogActions>
          <Button
            color="secondary"
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onSelect(selectedColor, right, down)}
          >
            Set
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ColorPicker;
