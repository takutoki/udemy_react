import React from 'react';
import PropTypes from 'prop-types';

const AboutTopic = props => (
  <div className="abouttopic">
    <ul>
      <li><h5>ReactRouterを用いて画面遷移</h5></li>
      <li><h5>現在のURL:{props.match.url}</h5></li>
    </ul>
  </div>
);

AboutTopic.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string }).isRequired,
};

export default AboutTopic;
