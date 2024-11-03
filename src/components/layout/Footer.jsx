import React from 'react'
import PropTypes from 'prop-types'

function Footer({
	className="",
	labelText="",
}) {
  return (
	<>
		<footer>
			<div className={className}>
				<p>{labelText}</p>
			</div>
		</footer>
	</>
	);
}

Footer.propTypes = {
	className:   PropTypes.string,
	labelText:   PropTypes.string,
};

export default Footer