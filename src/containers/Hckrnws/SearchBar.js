import React, { Component } from 'react';
import { connect } from 'react-redux';
import Query from '../../components/Hckrnws/Query';

class SearchBar extends Component {
  render() {
    return (
      <nav className="SearchBar navbar is-fixed-top">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <div className="navbar-item">
              <p className="title">
                hckrnws
              </p>
            </div>
          </div>
          <div className="navbar-item is-expanded">
            <Query/>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
