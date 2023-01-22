import { IoIosArrowDropupCircle } from 'react-icons/io';

import { FaYoutube } from 'react-icons/fa';
import { FaTwitch } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

const Footer = ()=>{
	return(

		<footer className="footer">
			<div className="footer__container">
				<div className="button">
					<a href="#main" className="button__container">
						<span className="button__text">Volver arriba</span>
						<IoIosArrowDropupCircle />
					</a>
				</div>
				<div className="socials">
					<h4 className="socials__title">
						Seguínos en
					</h4>
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
				<p className="footer__text">
					Ésta es una página desarrollada por mí, <a target="_blank" href="https://lucasr98.github.io/LR_Web/" rel="noreferrer">Lucas Retamozo</a>. Todos los elementos son de carácter meramente estéticos, algunos de los recursos que se encuentran en la misma como las imágenes y los textos de cada artículo fueron tomados de internet y no pertenecen a mi persona.
				</p>
			</div>
		</footer>

	)
}

export default Footer;