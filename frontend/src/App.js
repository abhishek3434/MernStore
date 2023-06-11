import React from "react";
/// Components //////////
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./Screen/HomeScreen";
/////////////////////////
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
