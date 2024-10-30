import { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Content color="blue" text="Don't be shocked, it's " />
      <Content color="red" text="For real, go do a little homework! " />
      <Content color="green" text="I think you know by now, but... " />
      <Footer />
    </>
  );
}

export default App;
