import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStoriesIfNeeded } from '../../actions/hckrnwsActions';
import Header from '../../components/Hckrnws/Header';
import ItemList from '../../components/Hckrnws/ItemList';
import SearchBar from './SearchBar';

class HckrnwsApp extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchStoriesIfNeeded());
  }

  render() {
    const {items, meta} = this.props;
    return (
      <div>
        <SearchBar/>
        <Header data={meta}/>
        <ItemList items={items}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.hckrnws.items,
    meta: state.hckrnws.meta,
  };
}

export default connect(mapStateToProps)(HckrnwsApp);
