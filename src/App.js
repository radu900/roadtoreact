import logo from "./logo.svg";
import "./App.css";

const title = "Ceva";

const list = [
  { id: 1, text: "mata" },
  { id: 2, text: "tactu" },
];
function App() {
  return (
    <div>
      <h1>{title}</h1>;<label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.text}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
