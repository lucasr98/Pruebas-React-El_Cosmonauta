import { RiSearchLine } from 'react-icons/ri';
import { usePalabraContext, useNumeroContext } from '../providers/NoticiasProvider';
import { Link } from 'react-router-dom';

const Header = (props)=>{

	const palabra = usePalabraContext();
	const numero = useNumeroContext();

	return(

		<header className="header">
			<div className="search">
				<div className="search__container">
					<input className="search__input" type="text" placeholder="Buscar..." /*onKeyPress={ e => {if(e.key === "Enter"){ props.mostrarBusqueda(0) }} }*/ />
					<div className="search__separator"></div>
					<Link to="/">
						<button className="search__icon" onClick={()=>props.mostrarBusqueda(0)}>
							<RiSearchLine />
						</button>
					</Link>
				</div>
			</div>
			<h1 className="logo" onClick={ ()=> console.log(`El estado ${palabra} y ${numero}, fueron extraídos.`) }>
				El<br></br>cosmonauta
			</h1>
			<h2>
				Tu suplemento de noticias sobre física y astronomía
			</h2>
		</header>

	)
}

export default Header;