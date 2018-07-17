import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import Email from '@material-ui/icons/Email';
import Info from '@material-ui/icons/Info';
import Flip from '@material-ui/icons/Flip';
import Delete from '@material-ui/icons/Delete';

import { setBlockAction } from '../interactions';

export namespace MyToolbar {
  export interface Props {
    onInfoClick: () => void
    onMenuClick: () => void
  }

  export interface State {
  }
}

class MyToolbar extends React.Component<MyToolbar.Props, MyToolbar.State> {
  render() {
    const { onInfoClick } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton*/}
          {/*color="inherit"*/}
          {/*aria-label="Menu"*/}
          {/*onClick={() => onMenuClick()}*/}
          {/*>*/}
          {/*<MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography
            variant="title"
            color="inherit"
            className="flex1"
          >
            Design helper
          </Typography>

          <Tooltip title="Flipendo!">
            <IconButton onClick={() => setBlockAction('flip')}>
              <Flip />
            </IconButton>
          </Tooltip>

          <Tooltip title="Flipendo!">
            <IconButton onClick={() => setBlockAction('delete')}>
              <Delete />
            </IconButton>
          </Tooltip>

          <IconButton onClick={() => onInfoClick()}>
            <Info color="secondary" />
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => window.location.href = 'mailto:project-of-doom@luzma.click'}
          >
            <Email />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MyToolbar;