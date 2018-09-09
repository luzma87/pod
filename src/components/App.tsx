import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Snackbar from '@material-ui/core/Snackbar';

import '../assets/styles/styles.css';
import { Block, Spell } from '../util/types';
import BlockList from './BlockList';
import Workspace from './Workspace';
import InfoDialog from './InfoDialog';
import MyToolbar from './MyToolbar';
import SelectedBlocksList from './SelectedBlocksList';

export namespace App {
  export interface Props {
  }

  export interface State {
    draggingBlock: Block | null
    selectedBlocks: Array<Block>
    showInfo: boolean
    showSnackbar: boolean
    showDrawer: boolean
    snackbarMessage?: string
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
    this.state = {
      draggingBlock: null,
      selectedBlocks: [],
      showSnackbar: false,
      showDrawer: false,

      showInfo: true
    };
  }

  handleSnackbar(spell: Spell) {
    const snackbarMessage = `${spell.name}! Click on a quilt block to ${spell.action} it`;
    this.setState({ snackbarMessage, showSnackbar: true });
    setTimeout(() => this.setState({ showSnackbar: false }), 5000);
  }

  handleShareableLink(link) {
    const snackbarMessage = 'The address of this page has been updated! you can bookmark it, or copy it. If you visit that again, you will see your saved work';
    this.setState({ snackbarMessage, showSnackbar: true });
    setTimeout(() => this.setState({ showSnackbar: false }), 10000);
  }

  render() {
    const { showInfo, showSnackbar, snackbarMessage } = this.state;
    return (
      <div className="flex1">
        <MyToolbar
          onInfoClick={() => this.setState({ showInfo: true })}
          onMenuClick={() => this.setState({ showDrawer: true })}
          onShareLink={(link) => this.handleShareableLink(link)}
          onSpellClick={(spell) => this.handleSnackbar(spell)}
        />
        <div className="container">
          <div className="left">
            <BlockList />
          </div>
          <div className="right">
            <Workspace />
            <SelectedBlocksList />
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
          message={(<div id="message-id">{snackbarMessage}</div>)}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
