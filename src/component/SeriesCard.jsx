export const SeriesCard = ({data}) => {
    // console.log(props);

    const { id, img_url, name, rating, description, genre, cast, watch_url } = data;

    return (
        <li key={id}>
            <div>
                <img src={img_url} alt={name} width="40%" height="50%" />
            </div>
            <h2>Name: {name} </h2>
            <h3>Rating: {rating} </h3>
            <p>Description: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>

            <button><a href={watch_url} target="_blank">Watch Now</a></button>
        </li>
    );
};