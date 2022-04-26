export default function PokemonCard({ pokemons }) {
  return (
    <div>
      {pokemons.map((pokemon, i) => (
        <div key={`${pokemon}-${i}`}>
          <img src={pokemon.img} />
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
        </div>
      ))}
    </div>
  );
}
