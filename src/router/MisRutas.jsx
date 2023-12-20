import React from "react";
import "../styles/rutas.css";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { Portafolio } from "../components/Portafolio";
import { Servicios } from "../components/Servicios";
import { Curriculum } from "../components/Curriculum";
import { Contacto } from "../components/Contacto";
import { HeaderNav } from "../components/layout/HeaderNav";
import { Footer } from "../components/layout/Footer";

export const MisRutas = () => {
	return (
		<BrowserRouter>
			<HeaderNav />
			<section className="content">
				<Routes>
					<Route path="/" element={<Inicio />} />
					<Route path="/inicio" element={<Inicio />} />
					<Route path="/portafolio" element={<Portafolio />} />
					<Route path="/servicios" element={<Servicios />} />
					<Route path="/curriculum" element={<Curriculum />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route
						path="/*"
						element={
							<div className="error">
								<h1>Error 404</h1>
							</div>
						}
					/>
				</Routes>
			</section>

			<Footer />
		</BrowserRouter>
	);
};
