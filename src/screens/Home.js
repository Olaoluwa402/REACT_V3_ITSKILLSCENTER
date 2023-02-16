import React from "react";
// import Banner from "../components/Banner/Banner";
// import NavLinks from "../components/NavLinks/NavLinks";
// import Main from "../components/Main/Main";
// import Input from "../components/useStateHook/useState";
// import Subscribe from "./components/Subscribe/Subscribe";
import { ToastContainer } from "react-toastify";
import Form from "../components/Form/Form";
import ConditionalRendering from "../components/ConditionalRendering_3";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
