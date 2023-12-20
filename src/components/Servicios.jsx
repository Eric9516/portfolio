import React from "react";
import PropTypes from "prop-types";

export const Servicios = (props) => {
	return (
		<div>
			<h1>Servicios</h1>

			<section className="servicios">
				<article className="articulo">
					<h2>Diseño web</h2>
					<p>Algo</p>
				</article>
				<article className="articulo">
					<h2>Desarrollo web</h2>
					<p>Algo</p>
				</article>
				<article className="articulo">
					<h2>Posicionamiento web</h2>
					<p>Algo</p>
				</article>
			</section>
		</div>
	);
};

Servicios.propTypes = {};
