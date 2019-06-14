import React, { Component } from 'react'
import axios from 'axios';
// import styled, { css } from "styled-components";
export class DeleteWarningCard extends Component {
    state = {
      name: '',
      height: '',
      age: ''
      }

      onSubmit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.props.match.params.id);
        this.props.history.push('/');
      }

      componentDidMount() {
        const { match, history } = this.props;
    
        axios.get('http://localhost:3333/smurfs')
          .then(res => {
            const smurf = res.data.filter(smurf => (
              smurf.id.toString() === match.params.id)
            );
    
            if (smurf.length > 0) {
              this.setState({
                name: smurf[0].name,
                age: smurf[0].age,
                height: smurf[0].height,              })
            } else {
              window.alert(`Your smurf with id ${match.params.id} is not found!`)
              history.push('/')
            }
          })
      }

   

     
    render() {
        const { name, age, height } = this.state;
    const { history } = this.props;
        return (
            <div className="alert">
                <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                <div>{name}</div>
                <div>{age}</div>
                <div>{height}</div>
            <button onClick={this.onSubmit}>
                Remove
            </button>
            </div>
        )
    }
}

export default DeleteWarningCard
