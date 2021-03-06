import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPlace, startSearch } from '../actions/index';

const SearchForm = props => (
  <form
    className="seach-form"
    onSubmit={(e) => {
      e.preventDefault();
      props.history.push(`/?place=${props.place}`);
      props.startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.setPlace(e.target.value);
      }}
    />
    <input
      className="submit-button"
      type="submit"
      value="検索"
    />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

const mapStateToProps = state => ({
  place: state.place,
});

export default connect(mapStateToProps, { setPlace, startSearch })(SearchForm);
