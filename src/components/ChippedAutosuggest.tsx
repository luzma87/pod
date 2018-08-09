import * as React from 'react';
import ChipInput from 'material-ui-chip-input';

export namespace ChippedAutosuggest {
  export interface Props {
    chips: any,
    handleAddChip: (string) => void,
    handleDeleteChip: (string, number) => void,
  }

  export interface State {
  }
}

class ChippedAutosuggest extends React.Component<ChippedAutosuggest.Props, ChippedAutosuggest.State> {
  render() {
    const { chips, handleAddChip, handleDeleteChip } = this.props;
    return (
      <ChipInput
        fullWidth
        blurBehavior="ignore"
        label="Search"
        value={chips}
        onAdd={(chip) => handleAddChip(chip)}
        onDelete={(chip, index) => handleDeleteChip(chip, index)}
      />
    );
  }
}

export default ChippedAutosuggest;
