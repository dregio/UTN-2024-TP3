import React from "react";
import ButtonCard from "./ButtonCard";
import PropTypes from 'prop-types';

function ButtonCards({
	cardsData, 
	cardClass = "card", 
    cardImgTopClass = "card-img-top",
    cardBodyClass = "card-body",
    cardTitleClass = "card-title",
    cardTextClass = "card-text",
    btnClass = "btn btn-primary",
}) {
	return (
		<div>
			{cardsData.map((cardData, index) => (
					<ButtonCard  key={index}
						cardImgSrc	= {cardData.cardImgSrc}
						cardImgAlt	= {cardData.cardImgAlt}
						cardTitle	= {cardData.cardTitle}
						cardText	= {cardData.cardText}
						btnLink		= {cardData.btnLink}
						btnText		= {cardData.btnText}
						cardClass		= {cardClass} 
						cardImgTopClass	= {cardImgTopClass}
						cardBodyClass	= {cardBodyClass}
						cardTitleClass	= {cardTitleClass}
						cardTextClass	= {cardTextClass}
						btnClass		= {btnClass}
					/>
			))}
		</div>
	);
}

ButtonCards.propTypes = {
	cardsData: PropTypes.arrayOf(
        PropTypes.shape({
			cardImgSrc	: PropTypes.string.isRequired, 
			cardImgAlt	: PropTypes.string, 
			cardTitle 	: PropTypes.string.isRequired, 
			cardText 	: PropTypes.string.isRequired, 
			btnLink 	: PropTypes.string.isRequired, 
			btnText 	: PropTypes.string.isRequired, 
        })
	).isRequired,
	cardClass: PropTypes.string,
	cardImgTopClass: PropTypes.string,
	cardBodyClass: PropTypes.string,
	cardTitleClass: PropTypes.string,
	cardTextClass: PropTypes.string,
	btnClass: PropTypes.string,
};

export default ButtonCards;

/*
{navLinks.map((link, index) => (
	<li key={index}>
		<a href={link.url}>
			<i className={link.className}></i>
			{link.name}
		</a>
	</li>
))}
*/