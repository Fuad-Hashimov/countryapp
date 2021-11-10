import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      const { data } = res;
      const result = data.map((m) => {
        return {
          name: m.name.common,
          official: m.name.official,
          capital: m.capital,
          region: m.region,
          flags: m.flags.png,
        };
      });
      setState(result);
    });
  }, []);
  console.log(state);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country</h1>
      </header>
    </div>
  );
}

export default App;
