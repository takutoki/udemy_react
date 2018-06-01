import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SeachForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '東京タワー',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form className="seach-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="place-input"
          type="text"
          size="30"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        <input
          className="submit-button"
          type="submit"
          value="検索"
        />
      </form>
    );
  }
}

SeachForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SeachForm;
