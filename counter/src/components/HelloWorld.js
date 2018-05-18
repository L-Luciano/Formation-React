import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect, PromiseState} from "react-refetch";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    // this.increment = this.increment.bind(this);
  }

  increment = () => {
    this.setState(previousState => ({
      counter: previousState.counter + 1
    }));
  };

  render() {
    if (this.props.postFetch.pending) return <h1> Loading !!!</h1>;
    return (
      <h1 onClick={this.increment}>
        Hello {this.props.planet}: {this.state.counter} times ! |||
        {this.props.postFetch.value.title}
      </h1>
    );
  }
}

HelloWorld.propTypes = {
  planet: PropTypes.string.isRequired
};

export default connect(({postId}) => ({
  postFetch: `https://jsonplaceholder.typicode.com/posts/${postId}`
}))(HelloWorld);
