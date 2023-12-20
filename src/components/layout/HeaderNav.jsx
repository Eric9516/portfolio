import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "../../styles/header.css";

export const HeaderNav = (props) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
			{isMenuOpen && <div className="overlay" onClick={handleToggleMenu}></div>}
			<div className="logo">
				<span>E</span>
				<h3>Eric Cantoni</h3>
			</div>
			<button className="menu-button" onClick={handleToggleMenu}>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
			<nav className={`navegacion ${isMenuOpen ? "show_menu" : ""}`}>
				<ul>
					<li>
						<NavLink
							to="inicio"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Inicio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="portafolio"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Portafolio
						</NavLink>
					</li>
					<li>
						<NavLink
							to="servicios"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Servicios
						</NavLink>
					</li>
					<li>
						<NavLink
							to="curriculum"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Curriculum
						</NavLink>
					</li>
					<li>
						<NavLink
							to="contacto"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Contacto
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

HeaderNav.propTypes = {};
