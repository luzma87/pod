import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import {SketchPicker} from 'react-color';
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";

import materialPalette from './colors';

export namespace ColorPicker {
  export interface Props {
    open: boolean
    onClose: () => void
    onSelect: (color) => void
  }

  export interface State {
    selectedColor: string
  }
}

class ColorPicker extends React.Component<ColorPicker.Props, ColorPicker.State> {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "#abcdef"
    };
  }

  handleChangeComplete(color) {
    this.setState({selectedColor: color.hex});
  }

  render() {
    const {onClose, onSelect, ...other} = this.props;

    return (
      <Dialog {...other}>
        <SketchPicker
          disableAlpha
          color={this.state.selectedColor}
          presetColors={materialPalette}
          onChangeComplete={(color) => this.handleChangeComplete(color)}
        />
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
            onClick={() => onSelect(this.state.selectedColor)}
          >
            Set
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default ColorPicker;
