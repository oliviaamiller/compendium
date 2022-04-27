import styles from '../../App.css';

export default function PokemonCard({ img, name, type }) {
  return (
    <div>
     <img className={styles.img} src={img} alt="pokemon"/>
     <p>{name}</p>
     <p>{type}</p>
    </div>
  );
}
