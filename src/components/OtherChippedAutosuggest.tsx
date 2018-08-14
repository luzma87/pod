import * as React from 'react';
import ChipInput from 'material-ui-chip-input';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';

export namespace OtherChippedAutosuggest {
  export interface Props {
  }

  export interface State {
    value: any,
    suggestions: any,
    textFieldInput: any
  }
}

const suggestions = [
  { name: 'Afghanistan' },
  { name: 'Aland Islands' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'American Samoa' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Anguilla' },
  { name: 'Antarctica' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Aruba' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bermuda' },
  { name: 'Bhutan' },
  { name: 'Bolivia, Plurinational State of' },
  { name: 'Bonaire, Sint Eustatius and Saba' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Bouvet Island' },
  { name: 'Brazil' },
  { name: 'British Indian Ocean Territory' },
  { name: 'Brunei Darussalam' }
];

const renderInput = (inputProps) => {
  const { classes, autoFocus, value, onChange, onAdd, onDelete, chips, ref, ...other } = inputProps;

  return (
    <ChipInput
      clearInputValueOnChange
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

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.name.toLowerCase().slice(0, inputLength) === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
};

class OtherChippedAutosuggest extends React.Component<OtherChippedAutosuggest.Props, OtherChippedAutosuggest.State> {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: [],
      value: [],
      textFieldInput: ''
    };
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  handleTextFieldInputChange = (event, { newValue }) => {
    this.setState({
      textFieldInput: newValue
    });
  };

  handleAddChip(chip) {
    this.setState({
      value: [...this.state.value, chip],
      textFieldInput: ''
    });
  }

  handleDeleteChip(chip, index) {
    let temp = this.state.value;
    temp.splice(index, 1);
    this.setState({ value: temp });
  }

  render() {
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
        suggestions={this.state.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        onSuggestionSelected={(e, { suggestionValue }) => {
          this.handleAddChip(suggestionValue);
          e.preventDefault();
        }}
        focusInputOnSuggestionClick={false}
        inputProps={{
          chips: this.state.value,
          onChange: this.handleTextFieldInputChange,
          value: this.state.textFieldInput,
          onAdd: (chip) => this.handleAddChip(chip),
          onDelete: (chip, index) => this.handleDeleteChip(chip, index)
        }}
      />
    );
  }

}

export default OtherChippedAutosuggest;
