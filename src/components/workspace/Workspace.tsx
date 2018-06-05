import * as React from "react";
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Quilt from "../blocks/Quilt";
import {WeekBlock} from "../../util/types";

export namespace Workspace {
  export interface Props {
    selectedBlocks: Array<WeekBlock>
  }

  export interface State {
    blockSize: number
    quiltSize: string
    multiplier: number
  }
}

const quiltSizes = {
  baby: {name: "Baby", size: {w: 36, h: 54}},
  lap: {name: "Lap", size: {w: 54, h: 72}},
  twin: {name: "Twin", size: {w: 54, h: 90}},
  double: {name: "Double", size: {w: 72, h: 90}},
  queen: {name: "Queen", size: {w: 90, h: 108}},
  king: {name: "King", size: {w: 108, h: 108}},
};

export default class Workspace extends React.Component<Workspace.Props, Workspace.State> {
  constructor(props) {
    super(props);
    this.state = {
      blockSize: 10,
      quiltSize: 'queen',
      multiplier: 5
    };
  }

  handleBlockSizeChange = event => {
    this.setState({blockSize: event.target.value});
  };

  handleQuiltSizeChange = event => {
    this.setState({quiltSize: event.target.value});
  };

  handleMultiplierChange = event => {
    this.setState({multiplier: event.target.value});
  };

  blockSizeSelect() {
    return (
      <FormControl style={{width: 75}}>
        <InputLabel htmlFor="block-size">Block Size</InputLabel>
        <Select
          value={this.state.blockSize}
          onChange={(event) => this.handleBlockSizeChange(event)}
          inputProps={{
            name: 'block-size',
            id: 'block-size',
          }}
        >
          <MenuItem value={10}>10"</MenuItem>
        </Select>
      </FormControl>
    );
  }

  quiltSizeSelect() {
    return (
      <FormControl style={{marginLeft: 20, width: 160}}>
        <InputLabel htmlFor="block-size">Quilt Size</InputLabel>
        <Select
          value={this.state.quiltSize}
          onChange={(event) => this.handleQuiltSizeChange(event)}
          inputProps={{
            name: 'block-size',
            id: 'block-size',
          }}
        >
          {Object.keys(quiltSizes).map(key => {
            const size = quiltSizes[key];
            return <MenuItem
              key={`qs-${key}`}
              value={key}
            >{size.name} [{size.size.w}"x{size.size.h}"]</MenuItem>
          })}
        </Select>
      </FormControl>
    );
  }

  multiplierSelect() {
    const a = [2, 3, 5, 6, 7, 8, 9, 10];
    return (
      <FormControl style={{marginLeft: 20, width: 160}}>
        <InputLabel htmlFor="block-size">Multiplier</InputLabel>
        <Select
          value={this.state.multiplier}
          onChange={(event) => this.handleMultiplierChange(event)}
          inputProps={{
            name: 'multiplier',
            id: 'multiplier',
          }}
        >
          {a.map(value => {
            return <MenuItem
              key={`m-${value}`}
              value={value}
            >{value}</MenuItem>
          })}
        </Select>
      </FormControl>
    );
  }

  render() {
    const quiltW = quiltSizes[this.state.quiltSize].size.w;
    const quiltH = quiltSizes[this.state.quiltSize].size.h;
    const multiplier = this.state.multiplier;
    return (
      <div className="workspace">
        {this.blockSizeSelect()}
        {this.quiltSizeSelect()}
        {this.multiplierSelect()}
        <Quilt
          width={quiltW}
          height={quiltH}
          multiplier={multiplier}
          selectedBlocks={this.props.selectedBlocks}
        />
      </div>);
  }
}
