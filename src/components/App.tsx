import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Snackbar from '@material-ui/core/Snackbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import '../assets/styles/styles.css';
import { Block, Spell } from '../util/types';
import BlockList from './BlockList';
import Workspace from './Workspace';
import InfoDialog from './InfoDialog';
import MyToolbar from './MyToolbar';

export namespace App {
  export interface Props {
  }

  export interface State {
    draggingBlock: Block | null
    selectedBlocks: Array<Block>
    showInfo: boolean
    showSnackbar: boolean
    showDrawer: boolean
    snackbarSpell?: Spell
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
    this.state = {
      draggingBlock: null,
      selectedBlocks: [],
      showInfo: false,
      showSnackbar: false,
      showDrawer: true
    };
  }

  toggleDrawer(isOpen) {
    this.setState({ showDrawer: isOpen });
  }

  renderDrawer() {
    return (
      <Drawer
        open={this.state.showDrawer}
        onClose={() => this.toggleDrawer(false)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => this.toggleDrawer(false)}
          onKeyDown={() => this.toggleDrawer(false)}
        >
          <div style={{ width: 250 }}>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem
                button
                component="a"
                href="#simple-list"
              >
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    );
  }

  handleSnackbar(spell: Spell) {
    this.setState({ snackbarSpell: spell, showSnackbar: true });
    setTimeout(() => this.setState({ showSnackbar: false }), 5000);
  }

  render() {
    const { showInfo, showSnackbar, snackbarSpell } = this.state;
    return (
      <div className="flex1">
        <MyToolbar
          onInfoClick={() => this.setState({ showInfo: true })}
          onMenuClick={() => this.setState({ showDrawer: true })}
          onSpellClick={(spell) => this.handleSnackbar(spell)}
        />
        {/*{this.renderDrawer()}*/}
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
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={showSnackbar}
          onClose={() => this.setState({ showSnackbar: false })}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={(<div id="message-id">
            {snackbarSpell ? `${snackbarSpell.name}!
            Click on a block to ${snackbarSpell.action} it` : ''}
          </div>)}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
