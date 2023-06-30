import React,{useState,useEffect} from "react";
// import products from "../products";
import Product from "../Components/Product";
import axios from 'axios';
///////////////////////////
import { Row, Col } from "react-bootstrap";

const HomeScreen = () => {
  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const fetchProducts = async()=>{
    const {data} = await axios.get('/api/products')
    setProducts(data)
    }     
    fetchProducts()
  },[]);

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
