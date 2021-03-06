import * as React from 'react';

import FormControl from '@material-ui/core/FormControl/FormControl';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import Select from '@material-ui/core/Select/Select';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';

import constants from '../util/constants';
import Quilt from './Quilt';

export namespace Workspace {
  export interface Props {
  }

  export interface State {
    blockSize: number
    quiltSize: string
    multiplier: number
  }
}

class Workspace extends React.Component<Workspace.Props, Workspace.State> {

  constructor(props) {
    super(props);
    this.state = {
      blockSize: 10,
      quiltSize: 'queen',
      multiplier: constants.inchMultiplier,
    };
  }

  handleQuiltSizeChange = event => {
    this.setState({ quiltSize: event.target.value });
  };

  handleMultiplierChange = event => {
    this.setState({ multiplier: event.target.value });
  };

  quiltSizeSelect() {
    const quiltSizes = constants.quiltSizes;
    return (
      <FormControl style={{ marginLeft: 20, width: 160 }}>
        <InputLabel htmlFor="block-size">Quilt Size</InputLabel>
        <Select
          value={this.state.quiltSize}
          onChange={(event) => this.handleQuiltSizeChange(event)}
          inputProps={{
            name: 'block-size',
            id: 'block-size'
          }}
          style={{
            zIndex: 10
          }}
        >
          {Object.keys(quiltSizes).map(key => {
            const size = quiltSizes[key];
            return <MenuItem
              key={`qs-${key}`}
              value={key}
            >{size.name} [{size.size.w}"x{size.size.h}"]</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  }

  multiplierSelect() {
    const a = [2, 3, 5, 6, 7, 8, 9, 10];
    return (
      <FormControl style={{ marginLeft: 20, width: 160 }}>
        <InputLabel htmlFor="block-size">Multiplier</InputLabel>
        <Select
          value={this.state.multiplier}
          onChange={(event) => this.handleMultiplierChange(event)}
          inputProps={{
            name: 'multiplier',
            id: 'multiplier'
          }}
        >
          {a.map(value => {
            return <MenuItem
              key={`m-${value}`}
              value={value}
            >{value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    );
  }

  render() {
    const quiltSizes = constants.quiltSizes;
    const { quiltSize, multiplier } = this.state;
    const quiltW = quiltSizes[quiltSize].size.w;
    const quiltH = quiltSizes[quiltSize].size.h;

    return (
      <div className="workspace">
        <div className="quiltControlsContainer">
          {this.quiltSizeSelect()}
          {/*{this.multiplierSelect()}*/}
        </div>
        <div className="quiltContainer">
          <Quilt
            width={quiltW}
            height={quiltH}
            multiplier={multiplier}
          />
        </div>
      </div>
    );
  }
}

export default Workspace;
