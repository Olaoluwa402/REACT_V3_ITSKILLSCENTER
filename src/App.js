import Banner from "./components/Banner/Banner";
import NavLinks from "./components/NavLinks/NavLinks";
import Main from "./components/Main/Main";
import Input from "./components/useStateHook/useState";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* banner componet */}
      <Banner />
      {/* NNavigation Liks */}
      <NavLinks />
      <Input />

      {/* Main */}
      <Main />
    </div>
  );
}

export default App;
