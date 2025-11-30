import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "../index.css";
import Button from "@mui/material/Button";
import { API_BASE } from "../apiConfig";
import Swal from "sweetalert2";



/*
 {
    "id": "1",
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }*/

const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: 0,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let handleAdd = (e) => {
    e.preventDefault();
    fetch(`${API_BASE}/products`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    }).then(() => {
      Swal.fire({
        title: "New product is added ",
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
      setNewProduct({
        title: "",
        price: 0,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: {
          rate: 0,
          count: 0,
        },
      });
    });
  };

  let handleChange = (e) => {
    // e.target.value
    let { value, name } = e.target;

    if (name.includes("rating.")) {
      let field = name.split("rating.")[1];
      setNewProduct({
        ...newProduct,

        rating: {
          ...newProduct.rating,
          [field]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }

    // let handleSubmit = ()=>
    // {
    //   let hair;
    // }
  };

  return (
    <Paper
      elevation={20}
      style={{
        width: "30rem",
        height: "max-content",
        // display: "grid",
        margin: "3rem auto",

        // justifyContent: "center",, display:"grid", gap:"20px"
      }}
    >
      <Typography
        variant="h4"
        style={{
          margin: "5px",
          marginBottom: "15px",
          paddingTop: "10px",
          textAlign: "center",
        }}
      >
        Create New Product
      </Typography>
      <Grid
        style={{ display: "grid", gap: "25px", margin: "8px" }}
        component="form"
        onSubmit={handleAdd}
      >
        <TextField
          id="outlined-basic"
          name="title"
          value={newProduct.title}
          label="Title"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          name="price"
          value={newProduct.price}
          type="number"
          label="Price"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          name="category"
          value={newProduct.category}
          label="Category"
          variant="outlined"
          onChange={handleChange}
          fullWidth
        />
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              id="outlined-basic"
              name="rating.rate"
              value={newProduct.rating.rate}
              type="number"
              label="Rating"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              id="outlined-basic"
              name="rating.count"
              value={newProduct.rating.count}
              type="number"
              label="Count"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          style={{ margin: "10px", width: "50rem auto", height: "2rem" }}
          variant="contained"
          color="success"
        >
          ADD
        </Button>
      </Grid>
    </Paper>
  );
};

export default NewProduct;
