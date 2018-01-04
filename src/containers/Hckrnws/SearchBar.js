import React, { Component } from 'react';
import { connect } from 'react-redux';
import Query from '../../components/Hckrnws/Query';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <Query/>
      </div>
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
