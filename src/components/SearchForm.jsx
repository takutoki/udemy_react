import React, { Component, PropTypes } from 'react';

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
      <form onSubmit={e => this.handleSubmit(e)}>
        <input
          type="text"
          value={this.state.place}
          onChange={e => this.handlePlaceChange(e.target.value)}
        />
        <input
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
