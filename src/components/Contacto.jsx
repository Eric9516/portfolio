import React from "react";
import PropTypes from "prop-types";
import "../styles/contacto.css";

export const Contacto = (props) => {
	return (
		<div className="contacto">
			<h1 className="titulo_principal">Contacto</h1>
			<form action="mailto:cantonieric1995@gmail.com" className="form_contacto">
				<input type="text" placeholder="Nombre" />
				<input type="text" placeholder="Apellido" />
				<input type="text" placeholder="Email" />
				<textarea placeholder="Motivo del contacto" />
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
};

Contacto.propTypes = {};
