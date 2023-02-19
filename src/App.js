import "./styles.css";
import User from "./User";
export default function App() {
  function lifyingState(name) {
    alert(name);
  }
  return (
    <div className="App">
      <h2>Lifting State Up</h2>
      <User alert={lifyingState}></User>
    </div>
  );
}
