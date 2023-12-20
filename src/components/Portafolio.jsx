import React from "react";
import PropTypes from "prop-types";
import { trabajos } from "../data/trabajos";
import "../styles/portafolio.css";
import { Link } from "react-router-dom";

export const Portafolio = () => {
	return (
		<section className="trabajos">
			{trabajos.map((trabajo, index) => {
				return (
					<article key={index} className="article">
						<div className="contenedor_imagen">
							<img src={"../../public/images/" + trabajo.id + ".png"} alt="" />
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
		</section>
	);
};

Portafolio.propTypes = {};
