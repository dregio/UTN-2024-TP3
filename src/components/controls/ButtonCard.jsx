import React from 'react'
import PropTypes from 'prop-types'

function ButtonCard({
    cardImgSrc,
    cardImgAlt = "",
    cardTitle,
    cardText,
    btnLink = "#",
    btnText,
    cardClass = "card", 
    cardImgTopClass = "card-img-top",
    cardBodyClass = "card-body",
    cardTitleClass = "card-title",
    cardTextClass = "card-text",
    btnClass = "btn btn-primary",
  }) {
  return (
		<div className={cardClass}>
			<img
				className={cardImgTopClass}
				src={cardImgSrc}
				alt={cardImgAlt ?? cardTitle}  
			/>
			<div className={cardBodyClass}>
				<h5 className={cardTitleClass}>{cardTitle}</h5>
				<p className={cardTextClass}>{cardText}
				</p>
				<a href={btnLink} className={btnClass}>{btnText}
				</a>
			</div>
		</div>
  )
}

ButtonCard.propTypes = {
  cardClass: PropTypes.string,
  cardImgTopClass: PropTypes.string,
  cardImgSrc: PropTypes.string.isRequired,
  cardImgAlt: PropTypes.string,
  cardBodyClass: PropTypes.string,
  cardTitleClass: PropTypes.string,
  cardTitle: PropTypes.string.isRequired,
  cardTextClass: PropTypes.string,
  cardText: PropTypes.string.isRequired,
  btnLink: PropTypes.string,
  btnClass: PropTypes.string,
  btnText: PropTypes.string.isRequired,
};

export default ButtonCard;