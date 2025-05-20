const NetflixSeries = () => {
    let name = "Prince of Persia";

    let rating = 8.6;

    let summary = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere modi soluta, quis temporibus praesentium fuga aliquid sunt maiores,minus aperiam mollitia. Eos sint neque provident sequi obcaecati dicta voluptates atque, vitae qui quo, quis ea vel temporibus. Alias corporis accusantium dolor hic, molestias laboriosam ratione saepe incidunt, non numquam consequuntur";
    let age = 19;

    const canWatch = () => {
        if (age >= 18) return "Watch Now";
        return "Not Available";
    };

    const returnGenre = () => {
        let genre = "Action";
        return genre;
    };

    return (
        <>
            <div>
                <img src="PrinceOfPersia.jpg" alt="PrinceOfPersia" width="40%" height="50%" />
            </div>
            <h2>Name: {name} </h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {summary}</p>
            <p>Genre: {returnGenre()}</p>
            {/* <button>{age >=18 ? "Watch Now" : "Not Available"}</button> */}
            <button>{canWatch()}</button>
        </>
    );
};

export const Header = () => {

    return <h4>All Copyright Reserverd for 2025 @Maurya</h4>
};

export const Footer = () => {

    return <h4>All Copyright Reserverd for 2025 @Maurya</h4>
};

export default NetflixSeries;














// export default NetflixSeries;
// export default Footer;
