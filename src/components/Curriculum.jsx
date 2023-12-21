import React from "react";
import foto from "../../public/foto.jpg";
import "../styles/curriculum.css";

export const Curriculum = () => {
	return (
		<div className="curriculum">
			<h1 className="nombre">Eric Cantoni</h1>
			<div className="contenedor_imagen">
				<img src={foto} alt="foto mia" />
			</div>
			<div className="acerca_de">
				<h3>ACERCA DE MI</h3>
				<p>
					Soy una persona proactiva, responsable, ordenada, con muchas ganas de
					aprender y de poder insertarme laboralmente en el mundo de la
					programación. Soy capaz de adaptarme a cualquier circunstancia y dar
					siempre lo mejor de mí en cualquier proyecto. Actualmente me encuentro
					estudiando programación y buscando mi primer oportunidad como
					Desarrollador Backend, Frontend o FullStack..
				</p>
			</div>
			<div className="educacion">
				<h3>EDUCACIÓN</h3>
				<ul>
					<li>
						<h5>
							Escuela superior de comercio y bachillerato anexo (E.S.C.B.A)
						</h5>
						<p>Bachiller en economía y administración, 2013</p>
					</li>
					<li>
						<h5>Universidad UTN FRGP</h5>
						<p>Tecnicatura universitaria en programación, Actualidad (1 año)</p>
					</li>
				</ul>
			</div>
			<div className="idiomas">
				<h3>IDIOMAS</h3>
				<ul>
					<li>
						<h5>Ingles</h5>
						<p>Nivel oral intermedio. Nivel escrito intermedio.</p>
					</li>
				</ul>
			</div>
		</div>
	);
};
