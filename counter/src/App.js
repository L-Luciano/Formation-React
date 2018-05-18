import React, {Component} from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
import List from "./components/List";
import CounterDisplay from "./components/CounterDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld planet={"Mars"} postId={2} />
        <hr />
        <Counter />
        <hr />
        <CounterDisplay />
        <hr />
        <List />
      </div>
    );
  }
}

export default App;
