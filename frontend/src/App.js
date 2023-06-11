import React from "react";
import { Routes, Route } from "react-router-dom";
/// Components //////////
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screen/HomeScreen";
/////////////////////////
import { Container } from "react-bootstrap";
import ProductScreen from "./Screen/ProductScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/product/:id" Component={ProductScreen} />
            <Route path="/" Component={HomeScreen} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
