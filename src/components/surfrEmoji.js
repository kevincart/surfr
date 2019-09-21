import React from 'react';

class Emoji extends React.Component {
    constructor (props){
        super(props);
        console.log('emoji props: ', this.props);

        this.content = this.props.content;
    }
    render() {
      return (
        <span role="img" aria-label="surfr-emoji" className="surfr-emoji">{this.content}</span>
      );
    }
  }

  export default Emoji;