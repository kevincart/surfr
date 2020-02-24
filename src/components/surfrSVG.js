import React from 'react';

//////////
// Children : Any valid JSX

class SVG extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
    }
    render() {
      return (
        <div className="surfr-svg-root">
            <div className="surfr-svg-content">
                { this.props.children }
            </div>
        </div>
      );
    }
  }

  export default SVG;