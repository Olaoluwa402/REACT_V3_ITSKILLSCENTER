import Banner from "./components/Banner/Banner";
import NavLinks from "./components/NavLinks/NavLinks";
import Main from "./components/Main/Main";
import Input from "./components/useStateHook/useState";
// import Subscribe from "./components/Subscribe/Subscribe";
import { ToastContainer } from "react-toastify";
import Form from "./components/Form/Form";
import ConditionalRendering from "./components/ConditionalRendering_3";

import "./App.css";


function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  <ConditionalRendering />
      <Form />
    </>

    // <div className="App">
    //   {/* banner componet */}
    //   <Banner />
    //   {/* NNavigation Liks */}
    //   <NavLinks />
    //   <Input />

    //   {/* Main */}
    //   <Main />
    // </div>
  );
}

export default App;
