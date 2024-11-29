import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { tipos } from "../utils/helpers";
import '../styles/details.css'

function Details() {
  const params = useParams();
  const [pokemon, setPokemon] = useFetch();

  useEffect(() => {
    if (params.name) getPokemon();
  }, [params.name]);

  const getPokemon = () => {
    setPokemon(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
  };

  const types = pokemon?.types.map((type) => type.type.name);

  return (
    <div className="base">
      <Link to="/pokedex">{"←"} Volver</Link>
      <div>
        <div className="allcard">
          <img className="pokemonimage"
            src={pokemon?.sprites?.other?.dream_world?.front_default}
            alt={pokemon?.name}
          />
        </div>
        <div className="image">
          <span className="number">#{pokemon?.id?.toString().padStart(3, "0")}</span>
          <h2 className="pokemon__name">{pokemon?.name}</h2>
          <div className="heightandweight">
            <span className="firstspan">
              <span className="secondspan">Peso</span>
              {pokemon?.weight}
            </span>
            <span>
              <span>Altura</span>
              {pokemon?.height}
            </span>
          </div>

          <div>
            <div className="lastbox">
              <h3 className="type">Tipo</h3>
              <div className="caracteristic">
                {types?.map((type) => (
                  <span key={type}>{tipos[type]}</span>
                ))}
              </div>
            </div>
            <div className="skills">
              <h3 className="skill">habilidades</h3>
              <div>
                {pokemon?.abilities?.map(data=> (
                <span className='habilidades'key={data.ability.name}>{data.ability.name}</span> 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Details };
