import { useRef } from "react";
import { useNameContext, types } from "../contexts/nameContext";
import { Link, useNavigate } from "react-router-dom";
import '../styles/home.css'


function Home() {
  const inputRef = useRef();
  const [name, dispatch] = useNameContext();
  const navigate = useNavigate()

  const setName = () => {
    dispatch({
      type: types.SET_NAME,
      payload: inputRef.current.value.trim(),
    });
    inputRef.current.value = ""
    navigate('/pokedex')
  };

  const clearName = () => {
    dispatch({
      type: types.CLEAR_NAME,
    });
  };

  return (
    
    <div className="home">
      <div className="home__content">
      <h2 className='home__title'>Hola {name ? <>{name}</> : "Entrenador"}!</h2>

      <div>
        {name ? (
          <>
            <p className="home__text">Continuemos con tu viaje! Ve a tu <Link className="home__link" to="/pokedex"> Pokedex</Link> </p>
          
            <button onClick={clearName} className="home__btn btn--radius">Salir</button>
          </>
        ) : (
          <>
            <p>Para comenzar tu pokeviaje, escribe tu nombre</p>
            <input ref={inputRef} type="text" placeholder="Tu nombre..." 
            className="home__input"
            />
            <button onClick={setName} className="home__btn">Comenzar</button>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export { Home };
