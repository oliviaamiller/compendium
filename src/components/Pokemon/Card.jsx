export default function PokemonCard({ img, name, type }) {
  return (
    <div>
     <img src={img} />
     <p>{name}</p>
     <p>{type}</p>
    </div>
  );
}
