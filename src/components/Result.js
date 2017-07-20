import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
  	<div className="result">
  	  You chose <strong>{props.quizResult}</strong>
  	</div>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired
};

export default Result;
