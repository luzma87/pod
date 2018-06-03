import * as React from 'react';
import BlockList from "../blocks/BlockList";

import '../../assets/styles/styles.css';

export namespace App {
  export interface Props {
  }

  export interface State {
  }
}

export class App extends React.Component<App.Props, App.State> {
  render() {
    return (
      <div>
        <BlockList />
      </div>
    );
  }
}
