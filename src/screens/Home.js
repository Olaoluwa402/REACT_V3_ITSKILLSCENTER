import React, { useContext } from "react";
import UseRef from "../components/useRef/useRef";
import UseRefTimer from "../components/useRef/useRefTimer";
// import Banner from "../components/Banner/Banner";
// import NavLinks from "../components/NavLinks/NavLinks";
// import Main from "../components/Main/Main";
// import Input from "../components/useStateHook/useState";
// import Subscribe from "./components/Subscribe/Subscribe";

import Form from "../components/Form/Form";

const Home = () => {
  return (
    <>
      <UseRefTimer />
      <UseRef />
      <Form />
    </>
  );
};

export default Home;
