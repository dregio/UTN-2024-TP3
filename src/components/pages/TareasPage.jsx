import React from 'react'
import Page from '../layout/Page';
import NewTaskForm from '../controls/NewTaskForm';
import '/public/css/tareas.css';

function TareasPage() {
return (
	<Page>
		<main>
			<h2>Tareas web: <span className="fuente-rt">RegioTasks</span> app en la web</h2>
			<p>Aquí estamos construyendo nuestra maravillosa app de gestión de tareas en la web para usted. =)</p>
			<section id="cards" className="tasks-section">
				<h2>Mi lista de tareas</h2>
			
				<div id="cards-container">
					<div id="sin-tareas">(No hay tareas)</div>{/* Aqui dentro se añadirán las cards nuevas */}
				</div>

				<NewTaskForm
				/>
			</section>
		</main>
	</Page>
)}

export default TareasPage;
