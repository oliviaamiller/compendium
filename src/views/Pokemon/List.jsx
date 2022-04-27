import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/Card';
import styles from '../../App.css';

//setting state
export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  // if there is a search of any length
  const searching = !!search.length;
  // if there is a search and there are no results
  const noPokemon = searching && !results.length;
  // if there is a search show the results, otherwise show all the pokemon
  const pokeList = searching ? results : pokemons;

  // fetching the API, creating a new object with the info I want access to
  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(' https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const { results } = await res.json();
      const pokemonData = results.map((pokemon) => ({
        img: pokemon.url_image,
        name: pokemon.pokemon,
        type: pokemon.type_1,
      }));

      setPokemons(pokemonData);
      setLoading(false);
    };
    getPokemon();
  }, []);

  // function for handling search input, will filter by name, be case insensitive and remove excess white space
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchResults = pokemons.filter((pokemon) =>
      pokemon.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase().trim())
    );
    setResults(searchResults);
  };

  return (
    <>
      <h2>pokemon</h2>
      <div>
        <input
          placeholder="search by name"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div>
        {loading ? (
          <p>loading...</p>
        ) : (
          <div className={styles.pokelist}>
            {pokeList.map((pokemon) => {
              return (
                <PokemonCard
                  img={pokemon.img}
                  name={pokemon.name}
                  type={pokemon.type}
                />
              );
            })}
          </div>
        )}
      </div>
      {noPokemon && <p>no pokemon</p>}
    </>
  );
}
