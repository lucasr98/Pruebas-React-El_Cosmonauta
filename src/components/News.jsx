import React, { useContext } from 'react';
import { paginaContext, mostrarNoticiasContext } from '../App';
import { usePalabraContext, useNumeroContext } from '../providers/NoticiasProvider';
import { Link } from 'react-router-dom';

import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { IoIosAddCircle } from 'react-icons/io';
import { BsHeartFill } from 'react-icons/bs';

const News = (props)=>{

	const pagina = useContext(paginaContext);
	const mostrarNoticias = useContext(mostrarNoticiasContext);

	const palabra = usePalabraContext();
	const numero = useNumeroContext();

	function cambiarLike(indice){
		document.querySelectorAll(".news__like")[indice].classList.toggle("news__like--activated");
	}

	function ObtenerPalabraNumero(){
		console.log(palabra);
		console.log(numero);
	}

	return(

		<section id="news" className="section">

			<h3 className="news__alert" style={{ display: props.notFound ? "inherit" : "none" }}>Lo sentimos, tu busqueda no ha sido encontrada.</h3>

			<div className="news">
				{

					props.noticias.map((noticia, indice)=>{
						return(

							<div className="news__container" key={indice}>
								<div className="news__img-container">
									<img src={noticia.img} alt={noticia.alt} />
								</div>
								<div className="news__content">
									<div className="news__text-container">
										<h3 className="news__title">
											{noticia.title}
										</h3>
										<p className="news__text">
											{noticia.recortarTexto()}
										</p>
										<span className="news__button">
											<Link to={ `/new/${noticia.id}` } className="news__link">
												<IoIosAddCircle /> Seguir leyendo
											</Link>
										</span>
									</div>
									<div className="news__footer">
										<span className="news__date">
											{noticia.date}
										</span>
										<span className="news__social-buttons">Like:
											<button className="news__like" onClick={()=>cambiarLike(indice)}>
												<BsHeartFill />
											</button>
										</span>
									</div>
								</div>
							</div>	

						)
					})
					
				}
			</div>

			<div className="pages" style={{ display: !props.notFound ? "flex" : "none" }}>
				<div className="pages__container">
					<button className="pages__button left" onClick={()=>mostrarNoticias(-1)} disabled={props.btnPagina[0]} style={{opacity: props.btnPagina[0]? "0.1" : "1"}}>
						<IoIosArrowDropleftCircle />
					</button>
					<span className="pages__number" onClick={ObtenerPalabraNumero}>Página {pagina}</span>
					<button className="pages__button right" onClick={()=>mostrarNoticias(1)} disabled={props.btnPagina[1]} style={{opacity: props.btnPagina[1]? "0.1" : "1"}}>
						<IoIosArrowDroprightCircle />
					</button>
				</div>
			</div>
		</section>

	)
}

export default News;