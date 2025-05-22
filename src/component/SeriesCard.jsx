import styles from "./Netflix.module.css";

export const SeriesCard = ({ data }) => {
    // console.log(props);

    const { img_url, name, rating, description, genre, cast, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        // background: "var( --bnt-hover-bg-color)",
        background: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f" }`,
        color: "var( --bg-color)",
        fontWeight: "bold",
        cursor: "pointer"
    };

    const ratingClass = (rating >= 8.5) ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="50%" />
            </div>
            <div className={styles["card-content"]} style={{ margin: "1.2rem 0" }}>
                <h2>Name: {name} </h2>
                {/* <h3>
                    Rating: <span className={ `rating ${rating >= 8.5 ? "super_hit" : "average"}`}> 
                        {rating} </span>
                </h3> */}
                <h3>
                    Rating: <span className={ `${styles.rating}  ${ratingClass}`}> 
                        {rating} </span>
                </h3>
                <p >Description: {description}</p>
                <p>Genre: {genre}</p>
                <p>Cast: {cast}</p>

                <a href={watch_url} target="_blank"><button
                    style={btn_style}>Watch Now</button></a>
            </div>
        </li>
    );
};