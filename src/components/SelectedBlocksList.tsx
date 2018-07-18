import * as React from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { observe } from '../interactions';
import { Block, SelectedBlock } from '../util/types';
import { getBlockKey, getDescriptionForSelectedList } from '../util/blockUtils';

export namespace SelectedBlocksList {
  export interface Props {
  }

  export interface State {
    selectedBlocks: SelectedBlock[]
  }
}

const renderNoBlocksYet = () => (
  <div style={{ padding: 30 }}>
    <Typography
      component="p"
      gutterBottom
    >
      No blocks on your quilt yet!
    </Typography>
    <Typography component="p">
      Try adding some by dragging the block on the left by the little white rectangle!
    </Typography>
  </div>
);

const blockListItem = (block: Block) => {
  return (
    <ListItem
      button
      key={getBlockKey(block, 'selected')}
    >
      <ListItemText primary={getDescriptionForSelectedList(block)} />
    </ListItem>
  );
};

const impossibleListItem = () => {
  return (
    <ListItem
      button
      key={Math.random()}
    >
      <ListItemText primary={'You should never see this'} />
    </ListItem>
  );
};

class SelectedBlocksList extends React.Component<SelectedBlocksList.Props, SelectedBlocksList.State> {
  constructor(props) {
    super(props);
  }

  unobserve() {
    observe(this.handleChange.bind(this));
  }

  componentDidMount() {
    observe(this.handleChange.bind(this));
  }

  componentWillUnmount() {
    this.unobserve();
  }

  handleChange(selectedBlocks: SelectedBlock[]) {
    this.setState({ selectedBlocks });
  }

  renderBlockList() {
    const { selectedBlocks } = this.state;
    const imageBlocks = selectedBlocks.filter(block => block.block !== undefined);
    return (
      <List component="nav">
        {imageBlocks.map(block => {
          const blockNonNull = block.block;
          return blockNonNull !== undefined ? blockListItem(blockNonNull) : impossibleListItem();
        })}
      </List>
    );
  }

  content() {
    if (this.state) {
      return this.state.selectedBlocks.length === 0
        ? renderNoBlocksYet()
        : this.renderBlockList();
    }
    return renderNoBlocksYet();
  }


  render() {
    return (
      <Paper style={{ width: 700, margin: 30 }}>
        {this.content()}
      </Paper>
    );
  }
}

export default SelectedBlocksList;
