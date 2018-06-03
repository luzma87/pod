import * as React from 'react';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BlockList from "../blocks/BlockList";

import '../../assets/styles/styles.css';
import Workspace from "../workspace/Workspace";

export namespace App {
  export interface Props {
  }

  export interface State {
  }
}

class App extends React.Component<App.Props, App.State> {
  render() {
    return (
      <div className="container">
        <BlockList />
        <Workspace />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
