import React from 'react';
import Emoji from './surfrEmoji';

class Nav extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('nav props: ', this.props);
    }
    render() {
      return (
        <Emoji content="&#127828;"></Emoji>
      );
    }
  }

  export default Nav;