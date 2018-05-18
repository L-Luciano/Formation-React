import * as React from 'react';

interface CounterProps {
  increment(): void;
  decrement(): void;
}

export default class CounterDisplay extends React.Component<CounterProps> {
  render() {
    return (
      <div>
        <button onClick={this.props.decrement}>-</button>
        <button onClick={this.props.increment}>+</button>
      </div>
    );
  }
}
