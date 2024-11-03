import React from 'react'
import "/public/css/index.css"
import Page from '../layout/Page';

function AboutPage() {
return (
	<Page>
		<div>
			<h2 className="fuente-rt">RegioTasks</h2>
			<h4>Sobre nosotros</h4>
			<p>Somos una empresa dedicada a brindar tecnología y conocimientos para la gestión de tareas.</p>
			<h4>Misión</h4>
			<p>Aprender y aprobar el curso.</p>
			<h4>Nuestro futuro</h4>
			<p>Si nos va bien con este TP, seremos felices.</p>
			<h4>Preguntas frecuentes</h4>
			<h5>¿Por qué hablás en plural, si sos un solo estudiante?</h5>
			<p>Porque así parecemos una empresa seria. Y además, lo hacen todos.</p>
			
		</div>
	</Page>
)}

export default AboutPage;
