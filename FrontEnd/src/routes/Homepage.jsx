import React, { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import Card from './Card.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';

function Homepage() {
  let cards = [];
  let routes = [];
  const location = useLocation();

  let items = [ //fetch this list from the Server
    {
      name: "Skis",
      description: "Two tiny snowboards for your feetsies"
    },
    {
      name: "Snowboard",
      description: "Like trying to swim with your arms tied together"
    },
    {
      name: "Ice Skates",
      description: "Like an ice cube on a hardwood floor"
    },
    {
      name: "Snowmobile",
      description: "Bet you a dollar you can't avoid a big stupid smile"
    }
  ]

  useEffect(() => {
    //fetch a list of items to display for the user from the server

  })

  for(let itemId = 0; itemId < 4; itemId++) {
    cards.push(
    <NavLink to={`/home/${itemId}`} state={items[itemId]}>
      <Card name={items[itemId].name} />
    </NavLink>)
  }

  return (
    <div>
      <h1>Home</h1>
        {cards}
    </div>
  );
}

export default Homepage;