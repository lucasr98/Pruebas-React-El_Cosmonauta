const About = (props)=>{

	function enviarMensaje(e){
		e.preventDefault();
		alert("Mensaje enviado")
	}

	return(

		<section id="about" className="section">
			<div className="about">
				<div className="paragraph">
					<h3>
						El Cosmonauta
					</h3>
					<p>
						Es un blog online de noticias sobre física y astronomía de habla hispana. Contamos con un equipo de expertos en física, astronomía, biología, geología e ingeniería; como así también, contamos con un respetable equipo de redacción, expertos en comunicación, programación y marketing digital.
					</p>
					<p>
						Como amantes de la ciencia, no nos tomamos a la ligera el manejo de la información que tenemos. La fuente de cada noticia que publicamos es altamente confiable, chequeada meticulosamente para poder brindarte lo mejor.
					</p>					
				</div>
				<div className="paragraph comment">
					<span className="comment__text">Si querés consultarnos sobre algo en particular, dar una opinión/crítica, o compartir información relacionada con lo que se habla en "El Cosmonauta" te invitamos a mandar un correo a <a href="#">elcomonauta@gmail.com</a>, o completar el siguiente formulario:</span>
					<form className="form" onSubmit={enviarMensaje}>
						<label className="form__input" htmlFor="name">
							<input name="name" type="text" required />
							<i>Nombre</i>
						</label>
						<label className="form__input" htmlFor="mail">
							<input name="mail" type="mail" required />
							<i>E-mail</i>
						</label>
						<label className="form__message" htmlFor="message">
							<textarea name="message" required></textarea>
							<i>Mensaje</i>
						</label>
						<input className="form__submit" type="submit" value="Enviar" />
					</form>
				</div>
			</div>
		</section>

	)
}

export default About;