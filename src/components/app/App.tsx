import * as React from 'react';
import BlockList from "../blocks/BlockList";

import '../../assets/styles/styles.css';
import Workspace from "../workspace/Workspace";

export namespace App {
  export interface Props {
  }

  export interface State {
  }
}

export class App extends React.Component<App.Props, App.State> {
  render() {
    return (
      <div className="container">
        <BlockList />
        <Workspace />
      </div>
    );
  }
}
