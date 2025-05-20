import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {

    return (
        <ul>
            {
                seriesData.map((currElem) => {
                    return (
                        <li key={currElem.id}>
                            <div>
                                <img src={currElem.img_url} alt={currElem.name} width="40%" height="50%" />
                            </div>
                            <h2>Name: {currElem.name} </h2>
                            <h3>Rating: {currElem.rating}</h3>
                            <p>Description: {currElem.description}</p>
                            <p>Genre: {currElem.genre}</p>
                            <p>Cast: {currElem.cast}</p>

                            <button><a href={currElem.watch_url} target="_blank">Watch Now</a></button>
                        </li>
                    );
                })
            }
        </ul>
    );
};
