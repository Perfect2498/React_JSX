export const SeriesCard = (props) => {
    console.log(props);
    return (
        <li key={props.currElem.id}>
            <div>
                <img src={props.currElem.img_url} alt={props.currElem.name} width="40%" height="50%" />
            </div>
            <h2>Name: {props.currElem.name} </h2>
            <h3>Rating: {props.currElem.rating}</h3>
            <p>Description: {props.currElem.description}</p>
            <p>Genre: {props.currElem.genre}</p>
            <p>Cast: {props.currElem.cast}</p>

            <button><a href={props.currElem.watch_url} target="_blank">Watch Now</a></button>
        </li>
    );
};