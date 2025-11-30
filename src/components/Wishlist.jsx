import React from 'react'
import { useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';




const Wishlist = () => {
    let cartProducts = useSelector((state)=>{return state.cart})


    let dispatch = useDispatch()


   let handleDelete = (id)=>{
        dispatch(removeItem(id))
    }




  return (
    <div>
        <h1>Wishlist</h1>
    {cartProducts.length !== 0 ?(

      <section className="products">
        {
        cartProducts.map((data) => (
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
    ) :(

        <h1>Add products to your Wishlist</h1>
    )
        
    }

    </div>


  )
}

export default Wishlist