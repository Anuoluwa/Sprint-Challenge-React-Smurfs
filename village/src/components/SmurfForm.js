import React, { Component } from 'react';
import axios from 'axios';
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    axios.post('http://localhost:3333/smurfs')
    .then(response => 
      this.setState({
        smurfs: response.data,
        name: '',
        age: '',
        height: ''
      })
    )
    .catch(error => {
      this.setState({ errorMessage: error.message });
    });
  }

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value });
  };

  render() {
    console.log(this.props.smurfs)

    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={this.handleInputChange} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
