import styles from '../modulosCss/MovieCard.module.css'

export function MovieCard ({movie}){
    const imagenUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
    <li>
        <img src={imagenUrl} alt={movie.title}/>
        <div className={styles.moviecard}>{movie.title}</div>
    </li>
    );
}