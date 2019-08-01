import React from 'react';
// import NavLink from 'react';

class SiteLink extends React.Component {
    constructor (props){
        super(props);
        this.children = this.props.children;
        console.log('link props: ', this.props);
    }
    render() {
      return (
        <a className="surfr-link" href="homepage.html">
            { this.props.children }
        </a>
        // <NavLink to={`${match.url}/three`}></NavLink>
      );
    }
  }

  export default SiteLink;