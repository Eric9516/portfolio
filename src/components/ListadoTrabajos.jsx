import React from "react";
import { trabajos } from "../data/trabajos";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/portafolio.css";

export const ListadoTrabajos = ({ cantidadMostrar }) => {
	const trabajosAMostrar = trabajos.slice(0, cantidadMostrar);

	return (
		<div className="trabajos">
			{trabajosAMostrar.map((trabajo, index) => {
				return (
					<article key={index} className="article">
						<div className="contenedor_imagen">
							<img
								src={"../../public/images/" + trabajo.id + ".png"}
								alt={trabajo.id}
							/>
						</div>
						<p className="categoria">{trabajo.categorias}</p>
						<h2 style={{ display: "none" }}>{trabajo.id}</h2>
						<h2 className="enlace">
							<Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
						</h2>

						<h3>{trabajo.tecnologias}</h3>
					</article>
				);
			})}
		</div>
	);
};

ListadoTrabajos.propTypes = {
	cantidadMostrar: PropTypes.number,
};
