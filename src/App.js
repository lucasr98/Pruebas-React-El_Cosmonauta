import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {NoticiasProvider} from './providers/NoticiasProvider';

import Background from './components/Background';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export const paginaContext = createContext();
export const mostrarNoticiasContext = createContext();

class Noticias{
  constructor(id, img, alt, title, text, like){
    this.id = id;
    this.img = img;
    this.alt = alt;
    this.title = title;
    this.text = text;
    this.like = like;
  }
  recortarTexto(){
      let textoRecortar = `${this.text.slice(0, 100)}... (seguir leyendo)`;
      return textoRecortar;
  }
}

const cantidadNoticias = 8;
let contador = 1;
let noticiasFetch;
let indiceBusqueda = 0;

function App() {

  const [ pagina, setPagina ] = useState(1);
  const [ noticias, setNoticias ] = useState([]);
  const [ btnPagina, setBtnPagina ] = useState([false, false]);

  const [section, setSection] = useState(0);

  const [notFound, setNotFound] = useState(false);

  useEffect(()=>{

    fetch("json/noticias.json", {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        noticiasFetch = data;
        mostrarNoticias();
      })

  }, [])

  function mostrarNoticias(referencia = 0){

    /*
    contador = contador + referencia;
    const noticiasFetch = []

    for(let i = (cantidadNoticias * contador) - cantidadNoticias + 1; i <= cantidadNoticias * contador; i++){

      fetch(`http://localhost:3000/json/noticia_${ i }.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          noticiasFetch.push(data)
        })

    }

    setTimeout(()=>{
      setNoticias(noticiasFetch)
      if (noticiasFetch.length < cantidadNoticias){
        setBtnPagina([false, true])
      }
    }, 2000)

    setBtnPagina([false, false]);

    if (contador === 1) {
      setBtnPagina([true,false]);
    }

    setPagina(contador);
    */

    setTimeout(()=>{window.location.href = "#main";}, 250);

    contador = contador + referencia;
    const busqueda = document.querySelectorAll(".search__input");
    const noticiasTemporales = [];
    const noticiasTemporales2 = [];

    setBtnPagina([false, false]);

    if (contador === 1) {
      setBtnPagina([true,false]);
    }

    for(let i = 0; i < noticiasFetch.length; i++){

      if(busqueda[indiceBusqueda].value === ''){
        noticiasTemporales.push(noticiasFetch[i]);
      }
      else if(busqueda[indiceBusqueda].value !== ''){
        for(let j = 0; j < noticiasFetch[i][6].length; j++){
          if(noticiasFetch[i][6][j].includes(busqueda[indiceBusqueda].value.toLowerCase()) || noticiasFetch[i][3].toLowerCase().includes(busqueda[indiceBusqueda].value.toLowerCase())){
            noticiasTemporales.push(noticiasFetch[i]);
            break
          }
        }
      }

    }

    busqueda.forEach(input=>{
      input.value = '';
    })

    if(noticiasTemporales.length === 0){
      setBtnPagina([true, true]);
      setNoticias([]);
      setNotFound(true);
      return
    }
    else{

      setNotFound(false);

      for(let i = (cantidadNoticias * contador) - cantidadNoticias; i < cantidadNoticias * contador; i++){
        if (noticiasTemporales[i]) {
          noticiasTemporales2.push(noticiasTemporales[i]);
        }
        else{
          setBtnPagina([false, true]);
        }
      }

      if(noticiasTemporales.length <= cantidadNoticias){
        setBtnPagina([true, true]);
      }

      setNoticias(

        noticiasTemporales2.map(noticia=>{
          return new Noticias(noticia[0], noticia[1], noticia[2], noticia[3], noticia[4], noticia[5], noticia[6], noticia[7]);
        })

      )

    }

    setPagina(contador);

  }

  function mostrarBusqueda(referencia){
    indiceBusqueda = referencia
    contador = 1;
    setSection(0)
    mostrarNoticias()
  }

  function mostrarNoticia(indice){
    setSection(0);
  }

  return (
    <NoticiasProvider>
      <paginaContext.Provider value={ pagina }>
        <mostrarNoticiasContext.Provider value={ mostrarNoticias }>
          <div className="App">
            <BrowserRouter>
              <Background />
              <Header mostrarBusqueda={mostrarBusqueda} />
              <Main mostrarNoticias={mostrarNoticias} noticias={noticias} btnPagina={btnPagina} notFound={notFound} section={section} setSection={setSection} mostrarNoticia={mostrarNoticia} mostrarBusqueda={mostrarBusqueda} />
              <Footer />
            </BrowserRouter>
          </div>
        </mostrarNoticiasContext.Provider>
      </paginaContext.Provider>
    </NoticiasProvider>
  );
}

export default App;
