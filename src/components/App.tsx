import * as React from 'react';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import '../assets/styles/styles.css';
import {Block} from "../util/types";
import BlockList from "./BlockList";

export namespace App {
  export interface Props {
  }

  export interface State {
    draggingBlock: Block | null
    selectedBlocks: Array<Block>
  }
}

class App extends React.Component<App.Props, App.State> {
  constructor(props) {
    super(props);
    this.state = {
      draggingBlock: null,
      selectedBlocks: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <BlockList />
        </div>
        <div className="right"></div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
