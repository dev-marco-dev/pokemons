import PokemonCard from "./PokemonCard";
import '../../styles/pokedexlist.css'

function PokemonList({ pokemons, isFiltering }) {

 
  return (
    <>
      {pokemons?.map((pokemon) => {
        const pokemonUrl = isFiltering ? pokemon.pokemon.url : pokemon.url
        const pokemonName = isFiltering ? pokemon.pokemon.name : pokemon.name

        return <PokemonCard key={pokemonName} url={pokemonUrl} />;
      })}
    </>
  );
}

export default PokemonList;
