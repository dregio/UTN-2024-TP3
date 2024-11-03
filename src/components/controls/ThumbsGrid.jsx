import React from 'react'
import PropTypes from 'prop-types';

function ThumbsGrid({
	thumbs,
	gridClass="thumbs-grid",
	thumbClass="thumb",
	ImgBoxClass="cl-img-box",
}) {
  return (
	<div className={gridClass}>
		{thumbs.map((thumb, index) => (
			<div className={thumbClass} key={index}>
				<div className={ImgBoxClass}>
					<img src={thumb.ImgSrc} alt={thumb.ImgAlt ?? thumb.Title}></img>
				</div>
				<h6>{thumb.Title}</h6>
			</div>
		))}
	</div>
  )
}

ThumbsGrid.propTypes = {
    gridClass:		PropTypes.string,
	thumbClass:		PropTypes.string,
	ImgBoxClass:	PropTypes.string,
	thumbs:			PropTypes.arrayOf(
		PropTypes.shape({
			ImgSrc:		PropTypes.string.isRequired,
			ImgAlt:		PropTypes.string,
			Title:		PropTypes.string.isRequired,
	}))
};
	
export default ThumbsGrid;