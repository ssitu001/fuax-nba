import React, {Component} from 'react';

import Cover from '../Cover/Cover';
import Subscribe from '../Subscribe/Subscribe';
import Blocks from '../Blocks/Blocks';

const HOME_URL = 'http://localhost:3005/home';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      home: [],
    }
  }

  componentDidMount() {
    fetch(HOME_URL, { method: 'GET'})
    .then((response) => response.json())
    .then((homeData) => {
      this.setState(
        { home: homeData }
      );
    });
  }

  render() {
    return (
      <div>
        <Cover images={this.state.home.slider}/>
        <Subscribe />
        <Blocks blocks={this.state.home.blocks}/>
      </div>
    )
  }
}

export default Home;

