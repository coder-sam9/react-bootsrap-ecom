import React from "react";
import { Button, Container } from "react-bootstrap";
function CartItem({ item ,onRemove }) {
  return (
    <Container className="d-flex flex-row">
      <div
        className=" border-bottom border-black py-2 fs-4 d-flex flex-row align-items-center"
        style={{ width: "40%", marginRight: "5%", height:'100px'}}
      >
        {" "}
        <img
          src={item.imageUrl}
          alt=""
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            marginRight: 10,
          }}
        />
        <h5 className="fs-5 fw-normal">
            {item.title}
        </h5>
      </div>
      <p
        className=" border-bottom border-black py-2 fs-5 fw-normal d-flex align-items-center"
        style={{ width: "20%", marginRight: "5%" ,height:'100px'}}
      >
        {item.price}
      </p>
      <div
        className=" border-bottom border-black py-2 fs-4 d-flex justify-content-between align-items-center"
        style={{ width: "30%", marginRight: "5%",height:'100px' }}
      >
        <p className="border border-info px-2 py-1">1</p>
        <Button variant='danger' className="text-white fw-bold p-1" onClick={onRemove}> Remove</Button>
      </div>
    </Container>
  );
}

export default CartItem;
