import * as React from 'react';

export namespace Quilt {
  export interface Props {
    width: number
    height: number
    multiplier: number
  }

  export interface State {
  }
}

class Quilt extends React.Component<Quilt.Props, Quilt.State> {
  render() {
    const props = this.props;
    return (
      <div
        className="quilt"
        style={{
          marginTop: 15,
          border: "solid 1px #555",
          width: props.width * props.multiplier,
          height: props.height * props.multiplier
        }}
      >
      </div>
    );
  }
}

export default Quilt
