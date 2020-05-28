import React from 'react';

class Card extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
    }
    render() {
      return (
        <div className="surfr-card-root">
            <div className="surfr-card-content">
                <div className="surf-card-image">
                    { this.props.image }
                </div>
                <div className="surf-card-text">
                    { this.props.text }
                </div>
            </div>
        </div>
      );
    }
  }

  export default Card;