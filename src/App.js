import logo from "./logo.svg";
import "./App.css";

const title = "Ceva";
function App() {
  return (
    <div>
      <h1>{title}</h1>;<label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
