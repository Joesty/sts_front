import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onChangeInput = (event) => {
    const inputV = event.target.value;

    setTimeout(() => this.setState({ inputV }), 2000);
  };

  render() {
    const inputV = this.state.inputV;

    return (
      <form>
        <input type="text"  class="form-control" onChange={this.onChangeInput}/>
        {inputV}
      </form>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div>
        <Form vanya="heelo "/>
      </div>
    );
  }
}

//export default App;