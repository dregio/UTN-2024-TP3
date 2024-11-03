import React from 'react'
import "/public/css/index.css"
import ButtonCards from '../controls/ButtonCards';
import ThumbsGrid from '../controls/ThumbsGrid';
import InputField from '../controls/InputField';
import MultiselectList from '../controls/MultiselectList';
import CheckBox from '../controls/CheckBox';
import TextArea from '../controls/TextArea';
import FormButtons from '../controls/FormButtons';
import Page from '../layout/Page';

const MAS_INFO = "Más información";

const servicios = [
	{ 	cardImgSrc	: "img/serv-soft.png", 
		cardImgAlt	: "Software de gestión de tareas", 
		cardTitle 	: "Software de gestión de tareas", 
		cardText 	: 'Con RegioTasks para la web, para el celular y para Windows, libere el máximo potencial de su talento.', 
		btnLink 	: "#", 
		btnText 	: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-tareas.png", 
		cardImgAlt	: "Capacitaciones en gestión de tareas", 
		cardTitle 	: "Capacitaciones en gestión de tareas", 
		cardText 	: 'Obtenga para su equipo las mejores prácticas para el manejo de tiempos, tareas y proyectos.', 
		btnLink 	: "#", 
		btnText 	: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-tiempos.png",
		cardImgAlt	: "Consultoría en gestión de tiempos",
		cardTitle 	: "Consultoría en gestión de tiempos",
		cardText 	: '¿Cree que su equipo podría rendir mejor? Le daremos pautas para maximizar su desempeño.',
		btnLink 	: "#",
		btnText		: MAS_INFO,
	},
	{	cardImgSrc	: "img/serv-proyectos.png",
		cardImgAlt	: "Gestión de proyectos (outsourcing)",
		cardTitle	: "Gestión de proyectos (outsourcing)",
		cardText	: 'Le brindaremos los mejores profesionales para planificar y desarrollar su proyecto con éxito.',
		btnLink		: "#",
		btnText		: MAS_INFO,
	},
];

const clientesGridData = [
	{	ImgSrc: "img/cl-audi.svg", 		Title: "Audi"},
	{	ImgSrc: "img/cl-coca.svg", 		Title: "Coca Cola"},
	{	ImgSrc: "img/cl-dell.svg", 		Title: "Dell"},
	{	ImgSrc: "img/cl-domino.svg", 	Title: "Domino's Pizza"},
	{	ImgSrc: "img/cl-electronic.svg",Title: "Electronic Arts"},
	{	ImgSrc: "img/cl-h.svg", 		Title: "H&M"},
	{	ImgSrc: "img/cl-kfc.svg", 		Title: "KFC"},
	{	ImgSrc: "img/cl-lg.svg", 		Title: "LG electronics"},
	{	ImgSrc: "img/cl-louis.svg", 	Title: "Louis Vuitton"},
	{	ImgSrc: "img/cl-marvel.svg", 	Title: "Marvel Studios"},
	{	ImgSrc: "img/cl-motorola.svg", 	Title: "Motorola"},
	{	ImgSrc: "img/cl-porsche.svg", 	Title: "Porsche"},
];


const temasList = [
	{	label: "software", 		value: "Software"},
	{	label: "capacitaciones",value: "Capacitaciones"},
	{	label: "consultoria", 	value: "Consultoría"},
	{	label: "proyectos", 	value: "Proyectos"},
	{	label: "soporte", 		value: "Soporte"},
	{	label: "facturación", 	value: "Facturación"},
	{	label: "otros", 		value: "Otros"},
];

function MainPage() {
return (
	<Page>
		<>
			<section id="inicio">
				<div>
					<h2>
						Mejore el rendimiento de su equipo con{" "} <span className="fuente-rt">RegioTasks</span>
					</h2>
					<img
						id="img-portada"
						alt="Captura de pantalla del software RegioTasks"
						src="img/portada-ejemplo.png"
					></img>
				</div>
				{/* <TitledImage 
						title= 'Mejore el rendimiento de su equipo con <span class="fuente-rt">RegioTasks</span>'
						imageURL= "img/portada-ejemplo.png"
						imageAlt="Captura de pantalla del software RegioTasks"
				/> */}
			</section>
			<section id="servicios">
				<h2>Servicios</h2>
				<ButtonCards
					cardsData= {servicios}
				/>
			</section>
			<section id="clientes">
				<h2>Nuestros clientes</h2>
				{	<ThumbsGrid
						gridClass="clientes-grid"
						thumbClass="cliente"
						ImgBoxClass="cl-img-box"
						thumbs={clientesGridData}
					/> 
				}
			</section>
			<section id="contacto">
				<h2>Contacto</h2>
				<form className="con-form">
					<InputField	name="nombre"	label="Tu nombre"				type="text"		placeHolder="Nombre"			className="con-control"/>
					<InputField	name="email"	label="Tu email"				type="email"	placeHolder="email@algo.com"	className="con-control"/>
					<InputField	name="telefono"	label="Tu número de teléfono"	type="tel"		placeHolder="54 9 11 1234 5678"	className="con-control"/>
					<MultiselectList
						name="temas"
						label="Elija qué tema le interesa:"
						secondaryLabelClass = "label-secundario"
						items={temasList}
					/>
					<CheckBox name="es-urgente" label="¿Requiere una respuesta urgente?"/>
					<TextArea name="mensaje" label="Tu mensaje" placeHolder="Mensaje" required={true} className="con-control" />
					<FormButtons className="Button-container con-control" labelEnviar="Enviar" labelBorrarTodo="Borrar todo"/>
				</form>

			</section>
		</>
	</Page>
)}

export default MainPage;
