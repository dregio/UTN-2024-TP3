import React from 'react'
import PropTypes from 'prop-types'


function Header({
	imageURL, 
	imageAlt = "", 
	imageWidth = 100, 
	title, 
	link = "", 
	navLinks
}) {
  return (
		<header>
			<div id="rt-header">
				<h1>
					<div>
						<a href={link}>
							<img src={imageURL} width={imageWidth} alt={imageAlt} />
						</a>
					</div>
					<div>{title}</div>
				</h1>
				<nav>
					<ul>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a href={link.url}>
									<i className={link.className}></i>
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

Header.propTypes = {
	imageURL:   PropTypes.string.isRequired, // "img/logo.png"
    imageWidth: PropTypes.number,   // 50
    imageAlt:   PropTypes.string,     // "Logo de RegioTasks"
	title:      PropTypes.string.isRequired, // "RegioTasks"
	link:       PropTypes.string, // "index.html"
    navLinks:   PropTypes.arrayOf(
        PropTypes.shape({
            url:        PropTypes.string.isRequired,
            name:       PropTypes.string.isRequired,
            className:  PropTypes.string.isRequired,
        })
    )
};


export default Header