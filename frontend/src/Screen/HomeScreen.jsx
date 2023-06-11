import React from "react";
import products from "../products";
import Product from "../Components/Product";

///////////////////////////
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {

  return (
    <>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={5} lg={4} xl={3}>
            <Product product={item}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
