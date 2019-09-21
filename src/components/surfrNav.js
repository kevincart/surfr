import React from 'react';
import Emoji from './surfrEmoji';

class Nav extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('nav props: ', this.props);

        this.hamburger = "🍔";
        this.trigram = "☰";
        this.surfer = "🏄";
        this.title = this.props.title;
    }
    render() {
      return (
        <div className="surfr-nav-root">
          <div className="surfr-nav-header">
            <p className="surfr-nav-trigger">
              <Emoji content={this.trigram}></Emoji>
            </p>
          </div>
          <div className="surfr-nav-title">{this.title}</div>
        </div>
      );
    }
  }

  export default Nav;