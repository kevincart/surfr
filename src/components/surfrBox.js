import React from 'react';

class Box extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('children: ', this.props.children);
    }
    render() {
      return (
        <div className="surfr-box-root">
            <div className="surfr-box-content">
                { this.props.children }
            </div>
        </div>
      );
    }
  }

  export default Box;