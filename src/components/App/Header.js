import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Start Bootstrap</a>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container */}
      </nav>
    )
  }
}