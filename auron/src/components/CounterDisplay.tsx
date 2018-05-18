import * as React from 'react';

interface CounterProps {
  value: number;
}

export default class CounterDisplay extends React.Component<CounterProps> {
  render() {
    return <div>Counter : {this.props.value}</div>;
  }
}
