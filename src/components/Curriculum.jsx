import React from "react";
import foto from "../../public/foto.jpg";
import "../styles/curriculum.css";
import { IoLogoCss3, IoLogoSass, IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiFirebase, SiAdobephotoshop } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { Tooltip } from "react-tooltip";

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
			<div className="skills">
				<h3>SKILLS</h3>
				<div className="tecnologias">
					<IoLogoHtml5
						data-tooltip-id="my-tooltip"
						data-tooltip-content="HTML5"
						data-tooltip-place="top"
					/>
					<IoLogoCss3
						data-tooltip-id="my-tooltip"
						data-tooltip-content="CSS3"
						data-tooltip-place="top"
					/>
					<IoLogoJavascript
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Javascript"
						data-tooltip-place="top"
					/>
					<FaReact
						data-tooltip-id="my-tooltip"
						data-tooltip-content="React.js"
						data-tooltip-place="top"
					/>
					<FaBootstrap
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Bootstrap"
						data-tooltip-place="top"
					/>
					<GrMysql
						data-tooltip-id="my-tooltip"
						data-tooltip-content="MySQL"
						data-tooltip-place="top"
					/>
					<TbSql
						data-tooltip-id="my-tooltip"
						data-tooltip-content="SQL"
						data-tooltip-place="top"
					/>
					<SiFirebase
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Firebase"
						data-tooltip-place="top"
					/>
					<SiAdobephotoshop
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Adobe Photoshop"
						data-tooltip-place="top"
					/>
					<FaNode
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Node.Js"
						data-tooltip-place="top"
					/>
					<IoLogoSass
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Sass"
						data-tooltip-place="top"
					/>
				</div>
				{/* Componente ReactTooltip */}
				<Tooltip id="my-tooltip" />
			</div>
		</div>
	);
};
