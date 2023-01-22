import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function New(){

	const [ noticia, setNoticia ] = useState(null);

	const { id } = useParams();

	useEffect(()=>{

		fetch(`https://lucasr98.github.io/Pruebas-React-El_Cosmonauta/json/noticia_${id}.json`, {
	      headers : { 
	        'Content-Type': 'application/json',
	        'Accept': 'application/json'
	      }
	    })
	      .then(response => response.json())
	      .then(data => {
	      	setNoticia(data);
	      	setTimeout(()=>{window.location.href = "#main";}, 250);
	      })

	}, [])

	return(

		<div className="new">

			{noticia &&

				<div className="new__container">
					<span className="new__date">| Fecha de publicación: {noticia.date.join("-")} |</span>
					<h4 className="new__title">
						{noticia.title}
					</h4>
					<figure className="new__img">
						<img src={noticia.img} alt={noticia.alt} />
						<figcaption>
							{noticia.alt}
						</figcaption>
					</figure>
					<h5 className="new__subtitle">
						{noticia.text}
					</h5>
					{
						noticia.content.map((parrafo, indice)=>{
							return(

								<p className="new__paragraph" key={indice}>
									{parrafo}
								</p>

							)
						})
					}
				</div>	
			}			
				<Link to="/" className="button">
					<div className="button__container">
						<IoIosArrowDropleftCircle />
						<span className="button__text">Volver atras</span>
					</div>
				</Link>

		</div>

	)
}