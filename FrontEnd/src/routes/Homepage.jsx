import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card.jsx';
import MainFeed from '../components/MainFeed.jsx';
import { useLocation } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar.jsx';
import CategoriesBar from '../components/CategoriesBar.jsx';
import MapState from '../types/MapState.js';
import ItemModal from '../components/ItemModal.jsx';

function Homepage() {
  const [cards, setCards] = useState()
  const [isOpen, setIsOpen] = useState(false);
  let routes = [];
  const location = useLocation();
  const [mapState, setMapState] = useState(MapState.Hidden);

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
  const toggleScreenFormat = (e) => {
    mapState === MapState.Hidden ? setMapState(MapState.Peek) : setMapState(MapState.Hidden);
  }

  useEffect(() => {
    //fetch a list of items to display for the user from the server
    if (!cards) updateCards();
  })

  //Invoke this function to change cards based on some user input
  const updateCards = () => {
    let cardsCache = [];
    for(let itemId = 0; itemId < items.length; itemId++) {
      cardsCache.push(
      <Link to={`/home/${itemId}`} state={items[itemId]}>
        <Card name={items[itemId].name} />
      </Link>)
    }
    setCards(cardsCache);
  }

  return (
    <div>
        <NavigationBar />
        <CategoriesBar />
        <button className="modalButton" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
        <MainFeed cards={cards} mapState={mapState} />
        <input type="button" value="View Map" onClick={toggleScreenFormat} />
      {isOpen && <ItemModal setIsOpen={setIsOpen} />} 
    </div>
  );
}

export default Homepage;