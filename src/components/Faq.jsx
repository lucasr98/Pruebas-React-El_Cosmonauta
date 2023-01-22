import React, { useState } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';

class Preguntas{
	constructor(pregunta, respuesta){
		this.pregunta = pregunta;
		this.respuesta = respuesta;
	}
}

const preguntasArray = [

	["¿Son confiables las fuentes de cada noticia?", "Cada una de las noticias publicadas en ésta página contiene información cuya veracidad es chequeada por expertos en el tema antes de cada publicación. En caso de que encuentres alguna noticia cuya información consideres erronea, puedes contactarnos y resolver el problema en cuestión."],
	["¿Puedo aportar ideas o información sobre algún tema?", "Puedes compartir cualquier tipo de información que consideres util para que nosotros la tengamos en cuenta y trabajemos con ella. No obstante, siempre se evaluará dicha información de manera objetiva y se tomará una decisión que no depende de quien lo envíe."],
	["¿Como manejan el tema de la crítica negativa sobre el manejo de la página?", "El Cosmonauta acepta todo tipo de opinión o crítica siempre y cuando sea objetiva y respetuosa. No estamos a favor del bullying y el acoso, todo comentario que atente contra nuestra libertad de expresión será rechazada y puede que castigada."],
	["¿Puedo usar contenído de la página como recurso didáctico?", "Sí, siempre y cuando el contenído que enseñes proveniente de ésta página sea legitimo y personal, sin ánmos comerciales ni ilegales."],
	["¿Qué otras fuentes de información puedo visitar que contengan el mismo tipo de contenído?", "Recomendamos visitar páginas como bbc, xataka, ciencia de sofa, entre otros. Canales de youtube como Kurzgesagt, VSauce, Veritasium, etc."]

]

const preguntas = preguntasArray.map(faq=>{
	return new Preguntas(faq[0], faq[1]);
})

const Faq = (props)=>{

	const [ faqMenu, setFaqMenu ] = useState(null);

	const abrirCerrar = (indice)=>{
		if(faqMenu == indice){
			return setFaqMenu(null);
		}
		setFaqMenu(indice);
	}

	return(

		<section id="faq" className="section">
			<ul className="faq">
				{
					preguntas.map((faq, indice)=>{
						return(

							<li className="faq__container" key={indice}>
								<div className="faq__question" onClick={ ()=> abrirCerrar(indice) }>
									<h3>
										{faq.pregunta}
									</h3>
									<div className="faq__button">
										<div className="faq__separator"></div>
										<button className={ faqMenu == indice ? "faq__plus faq__plus--activated" : "faq__plus"}>
											<BsFillPlusCircleFill />
										</button>
									</div>
								</div>
								<div className={ faqMenu == indice ? "faq__answer faq__answer--activated" : "faq__answer"}>
									<p>
										{faq.respuesta}
									</p>
								</div>
							</li>

						)
					})
				}
			</ul>
		</section>

	)
}

export default Faq;