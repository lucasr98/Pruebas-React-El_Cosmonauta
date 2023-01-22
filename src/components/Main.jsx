import React from 'react';
import News from './News';
import New from './New';
import Faq from './Faq';
import About from './About';

import { Link, Routes, Route } from 'react-router-dom';

import { FaYoutube } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { RiSearchLine } from 'react-icons/ri';

const secciones = [

	['Noticias', <News />, "/"],
	['FAQ', <Faq />, "/faq"],
	['Acerca de', <About />, "/about"]

]

const Main = (props)=>{

	return(

		<main id="main" className="main">
			<div className="main__bg">
				<div className="main__center">
					<nav className="section-selector">
						<ul className="section-selector__ul">
							{
								secciones.map((seccion, indice)=>{
									return(

										<li className="section-selector__item" key={indice} style={{ borderBottom: props.section === indice ? '.15rem solid rgb(241.05, 191.84, 45.82)' : '.15rem solid transparent' }} onClick={ ()=> props.setSection(indice) }>
											
											<Link to={`${seccion[2]}`}>
												{seccion[0]}
											</Link>

										</li>

									)
								})
							}
						</ul>
					</nav>
					<div className="main__separator"></div>
					<Routes>
						<Route path={`/Pruebas-React-El_Cosmonauta${secciones[0][2]}`} element={ <News noticias={props.noticias} btnPagina={props.btnPagina} notFound={props.notFound} mostrarNoticia={props.mostrarNoticia} /> }></Route>
						<Route path={`${secciones[0][2]}`} element={ <News noticias={props.noticias} btnPagina={props.btnPagina} notFound={props.notFound} mostrarNoticia={props.mostrarNoticia} /> }></Route>
						<Route path="/new/:id" element={ <New /> }></Route>
						<Route path={`${secciones[1][2]}`} element={ <Faq /> }></Route>
						<Route path={`${secciones[2][2]}`} element={ <About /> }></Route>
					</Routes>
					{
						/*
						secciones[section][1]
						*/
					}
				</div>
				<div className="sidebar">
					<div className="socials">
						<div className="socials__title">
							<h4>
								Seguínos en
							</h4>
						</div>
						<ul className="socials__container">
							<li className="socials__item">
								<a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /> Youtube</a>
							</li>
							<li className="socials__item">
								<a href="https://www.twitch.tv/" target="_blank" rel="noreferrer"><FaTwitch /> Twitch</a>
							</li>
							<li className="socials__item">
								<a href="https://twitter.com/home?lang=es" target="_blank" rel="noreferrer"><FaTwitter /> Twitter</a>
							</li>
							<li className="socials__item">
								<a href="https://www.instagram.com/?hl=es-la" target="_blank" rel="noreferrer"><AiFillInstagram /> Instagram</a>
							</li>
							<li className="socials__item">
								<a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
							</li>
							<li className="socials__item">
								<a href="https://discord.com/" target="_blank" rel="noreferrer"><FaDiscord /> Discord</a>
							</li>
						</ul>
					</div>
					<div className="search">
						<div className="search__container">
							<input className="search__input" type="text" placeholder="Buscar..." /*onKeyPress={ e => {if(e.key === "Enter"){ props.mostrarBusqueda(1) }} }*/ />
							<div className="search__separator"></div>
							<Link to="/">
								<button className="search__icon" onClick={()=>props.mostrarBusqueda(1)}>
									<RiSearchLine />
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>

	)
}

export default Main;