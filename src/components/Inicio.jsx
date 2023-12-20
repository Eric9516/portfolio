import React from "react";
import { Link } from "react-router-dom";
import "../styles/inicio.css";
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Inicio = () => {
	return (
		<div className="inicio">
			<h1>
				Hola! Soy <strong>Eric Cantoni</strong>, desarrollador web, ofrezco mis
				servicios de
				<strong> programación</strong> y <strong>desarrollo</strong> en todo
				tipo de proyectos web.
			</h1>
			<h2>
				Te ayudo a crear tu sitio o aplicación web, tener mas visibilidad y
				relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
			</h2>
			<section className="ultimos_proyectos">
				<h2 className="heading">Algunos de mis proyectos</h2>
				<p>Estos son algunos de mis trabajos de desarrollo web.</p>
			</section>
			<ListadoTrabajos cantidadMostrar={3} />
			<div className="works"></div>
		</div>
	);
};
