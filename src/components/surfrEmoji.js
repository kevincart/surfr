import React from 'react';

//////////
// Content : Converts from decimal NCR
//   eg: &#129312;

class Emoji extends React.Component {
    constructor (props){
        super(props);

        if (props) {
          this.content = this.props.content;
        }
    }
    render() {
      return (
        <span role="img" aria-label="surfr-emoji" className="surfr-emoji">{this.content}</span>
      );
    }
  }

  export default Emoji;