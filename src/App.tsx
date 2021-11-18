import "./App.css";
import Generator from "./components/Generator";

import titleSVG from "./assets/images/pictures/make-your-own-milliway-citizen.svg";

const App = () => {
  return (
    <div className="App">
      <Generator />
      <div>
        <img src={titleSVG} alt="title svg" className="title" />
      </div>
    </div>
  );
};

export default App;
