import React, {Component} from "react";
import classNames from "classnames";
import "../index.css";
import {Button} from "../bootstrap";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      value: 1,
    };
  }

  onChange(e) {
    const value = e.target.value;
    this.setState(previousState => ({
      value: parseInt(value),
    }));
  }

  increment() {
    this.setState(previousState => ({
      counter: previousState.counter + this.state.value,
    }));
  }

  render() {
    // const className = this.state.counter % 2 === 0 ? "even" : "odd";

    const labelClass = classNames({
      label: true,
      "divided-by-3": this.state.counter % 3 === 0,
      "divided-by-7": this.state.counter % 7 === 0,
      even: this.state.counter % 2 === 0,
      odd: this.state.counter % 2 !== 0,
    });

    return (
      <div className={labelClass}>
        <h1>{this.state.counter} times</h1>
        <input type="number" value={this.state.value} onChange={e => this.onChange(e)} />
        <Button onClick={() => this.increment()}>Add {this.state.value}</Button>
      </div>
    );
  }
}

export default Counter;
