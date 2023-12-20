import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import "../styles/proyecto.css";

export const Proyecto = () => {
	const params = useParams();
	const [proyect, setProyect] = useState({});

	useEffect(() => {
		let proyecto = trabajos.filter((trabajo) => trabajo.id === params.id);
		setProyect(proyecto[0]);
	}, []);

	return (
		<div className="proyecto">
			<div className="contenedor_imagen">
				<img
					src={"../../public/images/" + proyect.id + ".png"}
					alt={proyect.id}
				/>
			</div>
			<h1>{proyect.nombre}</h1>
			<h3>{proyect.tecnologias}</h3>
			<p>Descripción: {proyect.descripcion}</p>
			<a href={proyect.url} target="_blank">
				<strong>Ir al proyecto</strong>
			</a>
		</div>
	);
};