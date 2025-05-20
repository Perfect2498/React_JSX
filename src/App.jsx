import { NetflixSeries } from "./component/NetflixSeries";  // --> works when we export while starting the component
// import { NetflixSeries, Footer } from "./component/NetflixSeries";  // --> works when we export while starting the component
// import NetflixSeries from "./component/NetflixSeries"; //--> works when export default NetflixSeries; written in last
import "./component/Netflix.css"

export const App = () => {

    return (
        <section className="container">
            <h1 className="card-heading">List of Best Netflix Series</h1>
            < NetflixSeries />
        </section>
    );

};