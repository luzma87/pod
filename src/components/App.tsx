import * as React from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import '../assets/styles/styles.css';
import { Block } from '../util/types';
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
    return (
      <div className="flex1">
        <MyToolbar
          onInfoClick={() => this.setState({ showInfo: true })}
          onMenuClick={() => {
          }}
        />
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
