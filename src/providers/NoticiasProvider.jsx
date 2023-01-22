import React, { createContext, useContext, useState } from 'react';

const palabraContext = createContext();
const numeroContext = createContext();

export function usePalabraContext(){
	return useContext(palabraContext);
}

export function useNumeroContext(){
	return useContext(numeroContext);
}

export function NoticiasProvider(props){

	const [ palabra, setPalabra ] = useState('Perro');
	const [ numero, setNumero ] = useState(0);

	return(

		<palabraContext.Provider value={ palabra }>
			<numeroContext.Provider value={ numero }>
				{ props.children }
			</numeroContext.Provider>
		</palabraContext.Provider>

	)

}