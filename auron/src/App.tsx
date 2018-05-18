import * as React from 'react';
import './App.css';
import CounterController from './components/CounterController';
import CounterDisplay from './components/CounterDisplay';

interface AppProps {
  defaultValue: number;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AppState {
  counter: number;
  result?: Post;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counter: props.defaultValue
    };
  }

  loadData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`)
      .then(response => {
        return response.json();
      })
      .then(data =>
        this.setState({
          result: data
        })
      );
  }

  increment = () => {
    this.setState(
      previousState => ({
        counter: previousState.counter + 1
      }),
      () => {
        this.loadData();
      }
    );
  }

  decrement = () => {
    this.setState(
      previousState => ({
        counter: previousState.counter - 1
      }),
      () => {
        this.loadData();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <CounterController
          increment={this.increment}
          decrement={this.decrement}
        />
        <div>{this.state.result && this.state.result.title}</div>
        <CounterDisplay value={this.state.counter} />
      </div>
    );
  }
}

export default App;
