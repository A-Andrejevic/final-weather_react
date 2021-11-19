import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        <a
          href="https://github.com/A-Andrejevic/final-weather_react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Aleksandra Andrejevic
      </footer>
    </div>
  );
}

export default App;
