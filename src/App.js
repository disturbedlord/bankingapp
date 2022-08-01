import logo from "./logo.svg";
import "./App.css";
import "./Common/style.css";
import Dashboard from "./Dashboard";

import colors from "./Common/script";

function App() {
  return (
    <div className="App">
      <div
        className="mobile"
        style={{
          width: "20rem",
          height: "43rem",
          backgroundColor: colors.mobileBG,
          borderRadius: "30px",
        }}
      >
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
