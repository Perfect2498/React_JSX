import {NetflixSeries} from "./component/NetflixSeries";  // --> works when we export while starting the component
// import { NetflixSeries, Footer } from "./component/NetflixSeries";  // --> works when we export while starting the component
// import NetflixSeries from "./component/NetflixSeries"; //--> works when export default NetflixSeries; written in last

export const App = () => {

    return (
        <>
                < NetflixSeries />
        </>
    );

};