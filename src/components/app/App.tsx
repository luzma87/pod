import * as React from 'react';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BlockList from "../blocks/BlockList";

import '../../assets/styles/styles.css';
import Workspace from "../workspace/Workspace";
import {WeekBlock} from "../../util/types";

export namespace App {
  export interface Props {
  }

  export interface State {
    draggingBlock: WeekBlock | null
    selectedBlocks: Array<WeekBlock>
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

  updateDraggingBlock(block) {
    console.log('--- DRAG START ---', block);
    this.setState({draggingBlock: block});
  }

  updateSelectedBlocks() {
    console.log('--- DRAG END ---');
    const droppedBlock = this.state.draggingBlock;
    if (droppedBlock !== null) {
      const selectedBlocks = this.state.selectedBlocks;
      selectedBlocks.push(droppedBlock);
      console.log(selectedBlocks);
      this.setState({
        draggingBlock: null,
        selectedBlocks: selectedBlocks
      });
    }
  }

  resetDraggingBlock() {
    console.log('--- DRAG RESET ---');
    this.setState({draggingBlock: null});
  }

  render() {
    return (
      <div className="container">
        <BlockList
          onDragStart={(block) => this.updateDraggingBlock(block)}
          onDragReset={() => this.resetDraggingBlock()}
          onDragEnd={() => this.updateSelectedBlocks()}
        />
        <Workspace selectedBlocks={this.state.selectedBlocks} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
