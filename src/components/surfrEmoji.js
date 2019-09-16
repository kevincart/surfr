import React from 'react';

class Emoji extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('link props: ', this.props);

        this.content = this.props.content;
    }
    render() {
      return (
        <span role="img" aria-label="surfr-emoji" className="surfr-emoji">{this.props.content}</span>
      );
    }
  }

  export default Emoji;