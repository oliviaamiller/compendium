import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonCard from '../../components/Pokemon/Card';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await fetch(' https://pokedex-alchemy.herokuapp.com/api/pokedex');
      const { data } = await res.json();
      const pokemonData = data.map((pokemon) => ({
        id:
      }))
    }
  });

  return <div>Pokemon List</div>;
}
