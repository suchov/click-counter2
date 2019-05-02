import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      showError: false
    };
  }
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently: {this.state.counter}
        </h1>
        {this.state.showError ? (
          <h2 data-test="error-message"> You can't decrement below 0</h2>
        ) : null}
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
              showError: false
            })
          }
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            if (this.state.counter) {
              return this.setState({
                counter: this.state.counter - 1
              });
            }
            return this.setState({ counter: 0, showError: true });
          }}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
