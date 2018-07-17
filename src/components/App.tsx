import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import Email from '@material-ui/icons/Email';
import Info from '@material-ui/icons/Info';

import '../assets/styles/styles.css';
import { Block } from '../util/types';
import BlockList from './BlockList';
import Workspace from './Workspace';
import InfoDialog from './InfoDialog';

export namespace App {
  export interface Props {
  }

  export interface State {
    draggingBlock: Block | null
    selectedBlocks: Array<Block>
    showInfo: boolean
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
    this.state = {
      draggingBlock: null,
      selectedBlocks: [],
      showInfo: true
    };
  }

  render() {
    const { showInfo } = this.state;
    const classes = {
      root: {
        flexGrow: 1
      },
      flex: {
        flex: 1
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20
      }
    };

    return (
      <div style={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              style={classes.flex}
            >
              Design helper
            </Typography>

            <IconButton onClick={() => this.setState({ showInfo: true })}>
              <Info color="secondary" />
            </IconButton>
            <IconButton onClick={() => window.location.href = 'mailto:project-of-doom@luzma.click'}>
              <Email color="inherit" />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className="container">
          <div className="left">
            <BlockList />
          </div>
          <div className="right">
            <Workspace />
          </div>
        </div>
        <InfoDialog
          open={showInfo}
          onClose={() => this.setState({ showInfo: false })}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
