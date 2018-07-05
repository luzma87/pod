import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import Info from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import { Color, InfoContent } from '../util/types';
import constants from '../util/constants';
import Divider from '@material-ui/core/Divider/Divider';

export namespace InfoDialog {
  export interface Props {
    open: boolean
    onClose: () => void
  }

  export interface State {
  }
}

const makeParagraph = (content: InfoContent) => {
  const { key, color, text } = content;
  if (content.divider) {
    return <Divider
      key={key}
      style={{ marginBottom: 20 }}
    />;
  }
  let newColor: Color = 'default';
  if (color !== undefined) {
    newColor = color;
  }
  return (
    <Typography
      key={key}
      gutterBottom
      paragraph
      color={newColor}
    >
      {text}
    </Typography>);
};

class InfoDialog extends React.Component<InfoDialog.Props, InfoDialog.State> {
  render() {
    const { onClose, ...other } = this.props;

    return (
      <Dialog {...other}>
        <DialogTitle>
          <div
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Info style={{ marginRight: 15 }} />
            About
          </div>
        </DialogTitle>
        <DialogContent>
          {constants.infoContents.map((paragraph) => (
            makeParagraph(paragraph)
          ))}
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => onClose()}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default InfoDialog;
