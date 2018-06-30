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

class InfoDialog extends React.Component<InfoDialog.Props, InfoDialog.State> {

  makeParagragraph(key: string, content: InfoContent) {
    if (content.divider) {
      return <Divider style={{ marginBottom: 20 }} />;
    }
    let color: Color = 'default';
    if (content.color !== undefined) {
      color = content.color;
    }
    return (
      <Typography
        key={key}
        gutterBottom
        paragraph
        color={color}
      >
        {content.text}
      </Typography>);
  }

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
          {constants.infoContents.map((string, i) => (
            this.makeParagragraph(`info_${i}`, string)
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
