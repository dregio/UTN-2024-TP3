import React, { useState } from 'react';
import InputField from './InputField';
import TextArea from './TextArea';
//import PropTypes from 'prop-types'

let imageCounter = 0;

function NewTaskForm() { 

	const [formData, setFormData] = useState({
		cardTitle: "",
		cardDescription: "",
		cardImage: "",
		cardBgColor: "#ffffff",
		cardBorderColor: "#000000",
	});

	function handleChange(e) {
		setFormData({
		  ...formData,
		  [e.target.name]: e.target.value,
		});

		switch (e.target.name) {
			case 'cardBgColor': 
			case 'cardBorderColor': {
				document.getElementById(e.target.name).style.backgroundColor = e.target.value;
				break
			};
		}
	}

	function addTask(e) {
		e.preventDefault();
		
		/*  La imagen por defecto es aleatoria. El parámetro "random" evita que 
		se cachee, para asegurar que traiga siempre una imagen distinta. */
		const defaultImageURL = `https://picsum.photos/50?random=${imageCounter}`;

		// Crear nueva card
		const newCard = document.createElement("div");
		newCard.className = "card";
		newCard.style.backgroundColor = formData.cardBgColor;
		newCard.style.borderColor = formData.cardBorderColor;
	
		//Maquetar la card
		let imgURL = formData.cardImage || defaultImageURL;
		console.log(imageCounter);

		newCard.innerHTML = `
			<img src="${imgURL}" alt="Imagen de la tarea">
			<div class="card-content">
				<h6>${formData.cardTitle}</h6>
				<p>${formData.cardDescription}</p>
			</div>
		`;

		// Si todavía se ve el texto de 'No hay tareas', lo oculta.
		if (imageCounter == 0)
				document.getElementById("sin-tareas").style.cssText = 'display: none';

		//Añadir la nueva card al contenedor
		const cardContainer = document.getElementById("cards-container");
		cardContainer.appendChild(newCard);
				
		//Limpiar campos del formulario
		document.getElementById("card-form").reset();
	
		imageCounter += 1;
		console.log(imageCounter);
	}
		  
	return (
	<div id="card-form-container" className="new-card-form">
		<form id="card-form" onSubmit={addTask}>
			<h3>Nueva tarea</h3>
			<InputField	name="cardTitle"		label="Título:"			value={formData.Title}				onChange={handleChange} isRequired={true}/><br />
			<TextArea	name="cardDescription"	label="Descripción:"	value={formData.cardDescription} 	onChange={handleChange} rows={3}	placeHolder="Descripción de la tarea" /><br />
			<InputField	name="cardImage"		label="Url de imagen:"	value={formData.cardImage}			onChange={handleChange} type="url"	placeHolder="https://picsum.photos/50" /><br />
			<h4>Personalización</h4>
			<InputField	name="cardBgColor"		label="Color de fondo"	value={formData.cardBgColor}		onChange={handleChange} type="color" defaultValue="#ffffff"/><br />
			<InputField	name="cardBorderColor"	label="Color del borde"	value={formData.cardBorderColor}	onChange={handleChange} type="color" defaultValue="#000000"/><br />
			<div className="Button-container con-control">
				<button type="submit">Añadir tarjeta</button>
				<button type="reset">Limpiar</button>
			</div>
		</form>
	</div>
)}

export default NewTaskForm;