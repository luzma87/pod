import * as React from 'react';
import weeklyBlocks from '../assets/weeklyBlocks';
import supplementalBlocks from '../assets/supplementalBlocks';
import BlockCard from './BlockCard';
import { getBlockKey } from '../util/blockUtils';
import { Block, Tag } from '../util/types';
import ChippedAutosuggest from './ChippedAutosuggest';

const _ = require('lodash');

export namespace BlockList {
  export interface Props {
  }

  export interface State {
    chips: any,
    blocks: Array<Block>,
    filteredBlocks: Array<Block>
    tags: any

    suggestions: any
    value: any,
    textfieldInput: any
  }
}

class BlockList extends React.Component<BlockList.Props, BlockList.State> {

  constructor(props) {
    super(props);
    let blocks = [
      ...weeklyBlocks,
      ...supplementalBlocks
    ];
    let allTags = this.getAllTags(blocks);
    this.state = {
      chips: [],
      blocks: blocks,
      filteredBlocks: blocks,
      tags: allTags,

      suggestions: allTags,
      value: [],
      textfieldInput: ''
    };
  }

  filterBlocks() {
    const { chips, blocks } = this.state;
    if (chips.length === 0) {
      this.setState({ filteredBlocks: blocks });
      return;
    }
    let filteredBlocks: Array<Block> = [];

    blocks.forEach((block) => {
      chips.forEach((chip) => {
        if (block.tags.includes(chip)) {
          filteredBlocks.push(block);
        }
      });
    });
    filteredBlocks = _.uniq(filteredBlocks);
    this.setState({ filteredBlocks });
  }

  getAllTags(blocks) {
    let tags: Array<String> = [];
    let returnTags: Array<Tag> = [];
    blocks.forEach((block) => {
      tags = [...tags, ...block.tags];
    });
    tags = _.uniq(tags);
    tags = tags.sort();
    returnTags = tags.map((tag) => {
      return { name: tag };
    });
    return returnTags;
  }

  getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
    const { tags } = this.state;

    return inputLength === 0
      ? []
      : tags.filter(suggestion => {
        const keep =
          count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
  };

  handleSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  };

  handleTextFieldInputChange(event, { newValue }) {
    this.setState({
      textfieldInput: newValue
    });
  };

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
    const { chips, filteredBlocks, suggestions, textfieldInput } = this.state;
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
          <ChippedAutosuggest
            chips={chips}
            tags={suggestions}
            textfieldInput={textfieldInput}
            handleAddChip={(chip) => this.handleAddChip(chip)}
            handleDeleteChip={(chip, index) => this.handleDeleteChip(chip, index)}
            handleSuggestionsFetchRequested={(value) => this.handleSuggestionsFetchRequested(value)}
            handleSuggestionsClearRequested={() => this.handleSuggestionsClearRequested()}
            handleTextFieldInputChange={(e, v) => this.handleTextFieldInputChange(e, v)}
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
