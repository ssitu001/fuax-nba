import React, { Component } from 'react';

import './Subscribe.css';

const SUBSCRIBE_URL = 'http://localhost:3005/subcriptions';

class Subscribe extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      success: false,
      error: false,
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.email) {
      const regex = /\S+@\S+\.\S+/;
      const email = this.state.email;

      const validate = regex.test(email);

      if (validate) {
        // POST
        this.postEmailtoDB();
      } else {
        this.setState({
          success: false,
          error: true,
        });
      }
    }
  }

  postEmailtoDB() {
    fetch(SUBSCRIBE_URL,
      { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
        }),
      })
      .then((res) => {
        if ( res.status === 201 ) {
          this.setState({
            email: '',
            success: true,
            error: false,
          });
        }
      })
      .catch((err) => {
        console.log('err', err)
        this.setState({
          success: false,
          error: true,
        });
      });
  }

  render() {
    return (
      <div className="container subscribe-panel">
        <div className="row">
          <div className="col-md-12">
            <h1>Subscribe to us</h1>
            <form onSubmit={this.onSubmit}>
              <input 
                type="text"
                className="subscribe-input"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="youremail@email.com"
              />
            </form>
            { this.state.success 
              ? <p className="subscribe-success">Thank you</p>
              : null
            }
            {
              this.state.error
              ? <p className="subscribe-error">Please check your email and try again</p>
              : null
            }
            <p className="subscribe-message">You will receive most up to date statistics.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Subscribe;