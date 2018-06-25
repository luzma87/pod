import * as React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import Button from '@material-ui/core/Button/Button';
import Info from '@material-ui/icons/Info';

export namespace InfoDialog {
  export interface Props {
    open: boolean
    onClose: () => void
  }

  export interface State {
  }
}

class InfoDialog extends React.Component<InfoDialog.Props, InfoDialog.State> {

  listItem(content) {

  }

  render() {
    const { onClose, ...other } = this.props;

    const strings = [
      'Each square in the Quilt grid measures 2.5"',
      'You can drag blocks from the left and drop them in the Quilt',
      'You can drag and drop the blocks in the Quilt to rearrange them',
      'Clicking a block on the quilt will remove it',
      'Clicking a square in the Quilt grid will show a color picker to paint one or more squares'
    ];

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
          <DialogContentText>
            <p>
              These awesome blocks were designed by Jennifer Ofenstein
            </p>
            <p>
              You can find the patterns in the&nbsp;
              <a
                href="http://www.fandominstitches.com/2015/07/harry-potter-bookcase-quilt-along.html"
                target="_blank"
              >
                Fandom in Stitches
              </a>
              &nbsp;site
            </p>
            {strings.map(string => (
              <p>{string}</p>
            ))}
          </DialogContentText>

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
