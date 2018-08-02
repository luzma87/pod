import * as React from 'react';
import ChipInput from 'material-ui-chip-input';
import weeklyBlocks from '../assets/weeklyBlocks';
import supplementalBlocks from '../assets/supplementalBlocks';
import BlockCard from './BlockCard';
import { getBlockKey } from '../util/blockUtils';
import { Block } from '../util/types';

const _ = require('lodash');

export namespace BlockList {
  export interface Props {
  }

  export interface State {
    chips: any,
    blocks: Array<Block>,
    filteredBlocks: Array<Block>
  }
}

class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  constructor(props) {
    super(props);
    this.state = {
      chips: [],
      blocks: [
        ...weeklyBlocks,
        ...supplementalBlocks
      ],
      filteredBlocks: [
        ...weeklyBlocks,
        ...supplementalBlocks
      ]
    };
  }

  filterBlocks() {
    const { chips, blocks } = this.state;
    if (chips.length === 0) {
      this.setState({ filteredBlocks: blocks });
      return;
    }
    const filteredBlocks: Array<Block> = [];

    blocks.forEach((block) => {
      chips.forEach((chip) => {
        if (block.tags.includes(chip)) {
          filteredBlocks.push(block);
        }
      });
    });

    this.setState({ filteredBlocks });
  }

  handleAddChip(chip) {
    const newChips = _.cloneDeep(this.state.chips);
    newChips.push(chip);
    this.setState({ chips: newChips }, () => this.filterBlocks());
  }

  handleDeleteChip(chip, index) {
    const newChips = _.cloneDeep(this.state.chips);
    newChips.splice(index, 1);
    this.setState({ chips: newChips }, () => this.filterBlocks());
  }

  render() {
    const { chips, filteredBlocks } = this.state;
    return (
      <div
        style={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          height: '99%'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', padding: 8 }}>
          <ChipInput
            fullWidth
            blurBehavior="ignore"
            label="Search"
            value={chips}
            onAdd={(chip) => this.handleAddChip(chip)}
            onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
          />
        </div>
        <div className="blockListContainer">
          {filteredBlocks.map(block => {
            return (<BlockCard
              key={getBlockKey(block, 'list')}
              block={block}
              targetWidth={block.size.width * 8}
            />);
          })}
        </div>
      </div>
    );
  }
}

export default BlockList;
