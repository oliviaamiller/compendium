import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import PokemonCard from '../../components/Pokemon/Card';

export default function App() {

  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(' https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const { data } = await res.json();
      const pokemonData = data.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.url_image
      }))
    }
  });

  return (
    <p>pokemon list</p>
  );
}