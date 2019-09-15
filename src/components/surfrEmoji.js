import React from 'react';

class Emoji extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('link props: ', this.props);
    }
    render() {
      return (
        <span role="img" aria-label="surfr-emoji" className="surfr-emoji"></span>
        // <a className="surfr-link" href="homepage.html">
        //     { this.props.children }
        // </a>
      );
    }
  }

  export default Emoji;