import * as React from 'react';
import ChipInput from 'material-ui-chip-input';
import { Tag } from '../util/types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

export namespace ChippedAutosuggest {
  export interface Props {
    chips: any
    textfieldInput: any
    handleAddChip: (String) => void
    handleDeleteChip: (String, number) => void
    handleSuggestionsFetchRequested: (any) => void
    handleSuggestionsClearRequested: () => void
    handleTextFieldInputChange: any
    tags: Array<Tag>
  }

  export interface State {
    textFieldInput: any
  }
}

const renderInput = (inputProps) => {
  const { classes, autoFocus, value, onChange, onAdd, onDelete, chips, ref, ...other } = inputProps;

  return (
    <ChipInput
      clearInputValueOnChange
      label="Search"
      onUpdateInput={onChange}
      onAdd={onAdd}
      onDelete={onDelete}
      value={chips}
      inputRef={ref}
      {...other}
    />
  );
};

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  const matches = match(suggestion.name, query);
  const parts = parse(suggestion.name, matches);

  return (
    <MenuItem
      selected={isHighlighted}
      component='div'
    >
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span
              key={String(index)}
              style={{ fontWeight: 300 }}
            >
              {part.text}
            </span>
          ) : (
            <strong
              key={String(index)}
              style={{ fontWeight: 500 }}
            >
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
};

const renderSuggestionsContainer = (options) => {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
};

const getSuggestionValue = (suggestion) => {
  return suggestion.name;
};

class ChippedAutosuggest extends React.Component<ChippedAutosuggest.Props, ChippedAutosuggest.State> {

  constructor(props) {
    super(props);
    this.state = {
      textFieldInput: ''
    };
  }

  render() {
    const { chips, tags, textfieldInput, handleAddChip, handleDeleteChip, handleSuggestionsFetchRequested, handleSuggestionsClearRequested, handleTextFieldInputChange } = this.props;

    const styles = {
      container: {
        flexGrow: 1,
        position: 'relative'
        // height: 200
      },
      suggestionsContainerOpen: {
        position: 'absolute',
        marginTop: 8,
        marginBottom: 8,
        left: 0,
        right: 0,
        zIndex: 999
      },
      suggestion: {
        display: 'block'
      },
      suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none'
      },
      textField: {
        width: '100%'
      }
    };

    return (
      <Autosuggest
        theme={{
          container: styles.container,
          suggestionsContainerOpen: styles.suggestionsContainerOpen,
          suggestionsList: styles.suggestionsList,
          suggestion: styles.suggestion
        }}
        renderInputComponent={renderInput}
        suggestions={tags}
        onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(e, { suggestionValue }) => {
          handleAddChip(suggestionValue);
          e.preventDefault();
        }}
        focusInputOnSuggestionClick={false}
        inputProps={{
          chips: chips,
          onChange: handleTextFieldInputChange,
          value: textfieldInput,
          onAdd: (chip) => handleAddChip(chip),
          onDelete: (chip, index) => handleDeleteChip(chip, index)
        }}
      />
    );
  }

}

export default ChippedAutosuggest;
