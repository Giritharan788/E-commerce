import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { OrbitProgress } from "react-loading-indicators";
import useFetch from "./customHook/fetch";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {addItem} from "../store/cartSlice"
import { useDispatch,useSelector } from "react-redux";

// {
//     "id": "1",
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   },

const ProductLists = () => {
  // const [products, setProducts] = useState([]);
  // const [errors, setErrors] = useState("");
  // const [loading, setLoading] = useState("true");

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Data Not Found ");
  //       }
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       setErrors(error.message);
  //     })
  //     .finally(()=>{
  //       setLoading(false)
  //     })
  // }, []);
  let { products, loading, errors ,setProducts } = useFetch(
    "http://localhost:4000/products"
  );


  let navigate = useNavigate();


  let handleDelete = (id) => {
    axios.delete(`http://localhost:4000/products/${id}`)
    .then(() => {
      Swal.fire({
        title: "Item is deleted",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    });
    let newProductList = products.filter((product)=>{ return product.id !== id})
    setProducts(newProductList)
  };

let dispatch = useDispatch()
let SelectorData = useSelector((state)=>{return state.cart})

  let handleCart = (product)=>{
    let fillerProducts = SelectorData.some((cartProduct)=>{ return cartProduct.id === product.id})
    if(fillerProducts){
       Swal.fire({
        title: "product already in the cart",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    }
    else{

      dispatch(addItem(product))
       Swal.fire({
        title: "The product is added ",
        showClass: {
          popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
        },
        hideClass: {
          popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
        },
      });
    }
  }

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <OrbitProgress
          variant="track-disc"
          speedPlus="-1"
          easing="ease-in-out"
          color="grey"
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Product Lists</h1>

      <Button variant="success" style={{ margin: "10px" }}>
        Create
      </Button>

      <section className="products">
        {products.map((data) => (
          <Card
            key={data.id}
            style={{ width: "18rem", padding: "10px", height: "50rem" }}
          >
            <Card.Img variant="top" src={data.image} className="img" />
            <Card.Body style={{ height: "10rem", margin: "10px" }}>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text
                style={{
                  height: "100px", // fixed height for scroll to work
                  overflowY: "scroll", // scroll vertically only
                  // textOverflow: "ellipsis",
                }}
              >
                {data.description}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{"Category : " + data.category}</ListGroup.Item>
              <ListGroup.Item>{"Rating : " + data.rating.rate}</ListGroup.Item>
              <ListGroup.Item>{"Price : " + data.price}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              {/* <Card.Link href="#">Card Link</Card.Link> */}
              <Button variant="outline-primary" style={{ margin: "10px" }} onClick={()=>{handleCart(data)}}>
                Add to Cart
              </Button>
              <Button
                variant="outline-dark"
                style={{ margin: "10px" }}
                onClick={() => {
                  navigate(`/updateProduct/${data.id}`);
                }}
              >
                Update
              </Button>
              <Button
                variant="outline-danger"
                style={{ margin: "10px" }}
                onClick={() => {
                  handleDelete(data.id);
                }}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
      <div>{errors}</div>
    </div>
  );
};

export default ProductLists;
