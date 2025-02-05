import React from "react";
import { Container } from "react-bootstrap";
import MusicItem from "../components/MusicItem";

function Home() {
  const concerts = [
    {
      date: "JUL 16",
      location: "DETROIT, MI",
      venue: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      location: "TORONTO, ON",
      venue: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      location: "BRISTOW, VA",
      venue: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      location: "PHOENIX, AZ",
      venue: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      location: "LAS VEGAS, NV",
      venue: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      location: "CONCORD, CA",
      venue: "CONCORD PAVILION",
    },
  ];
  return (
    <div
      fluid
      className="text-center d-flex flex-column align-items-center pb-3"
    >
      <Container fluid className="bg-secondary p-3">
        <Container
          className=" border border-info mb-3"
          style={{ width: "20rem" }}
        >
          <p className="fs-4 p-2 text fw-semibold text-white">Get the Latest Music</p>
        </Container>
        <Container
          className="d-flex justify-content-center align-items-center mb-3"
          style={{
            width: "5rem",
            height: "5rem",
            borderRadius: "50%",
            border: "2px solid #56CCF2",
          }}
        ></Container>
      </Container>
      <Container className="m-3 w-75">

      <h2 className="text-black ">
        Tours
      </h2>
         <Container fluid>
          {concerts.map((item,index)=><MusicItem key={index} item={item}/>)}
         </Container>
      </Container>
    </div>
  );
}

export default Home;
