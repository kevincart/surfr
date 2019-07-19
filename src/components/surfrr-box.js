import React from 'react';

class Box extends React.Component {
    public children = this.props.children;

    render() {
      return (
        <div className="box-root">
            ${this.children}
        </div>
      );
    }
  }

  export default Box;