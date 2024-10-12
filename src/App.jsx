import { Counter, ToggleTheme, LikeAndDislike } from "./homework";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
      <ToggleTheme />
      
      <br />

      <div>
        <h1 style={{color:"orangered"}}>Like and Dislike</h1>
        <LikeAndDislike />
      </div>
    </>
  );
}

export default App;
