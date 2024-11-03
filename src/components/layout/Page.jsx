import React from 'react'
import Header from './Header';
import Footer from './Footer';
import PropTypes from "prop-types";

const navLinks = [
	{name: "Inicio",      url: "/",				className: "fa-solid fa-house"},
	{name: "Servicios",   url: "/#servicios",	className: "fa-solid fa-people-arrows"},
	{name: "Contacto",    url: "/#contacto",	className: "fa-solid fa-phone"},
	{name: "Tareas web",  url: "/tareas",		className: "fa-solid fa-bars-progress"},
	{name: "Acerca de",   url: "/about",		className: "fa-solid fa-circle-info"},
];

const logo = '/img/logo.png'

function Page({ children }) {
  return (
	<>
		<Header
			imageURL={logo}
			imageWidth={50}
			imageAlt="Logo de RegioTasks"
			title="RegioTasks"
			link="index.html"
			navLinks={navLinks}
		/>
		{children}
		<Footer
			className="footer-container"
			labelText='RegioSoft &reg; RegioTasks&trade;'	//<span class="fuente-rt-claro">RegioTasks&trade;</span>"
		/>
	</>
  )
}

Page.propTypes = {
	children: PropTypes.element.isRequired,
  };
  
export default Page;