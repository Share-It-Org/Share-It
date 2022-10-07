import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '../components/Card.jsx';
import MainFeed from '../components/MainFeed.jsx';
import { useLocation } from 'react-router-dom';
import NavigationBar from '../containers/NavigationBar.jsx';
import CategoriesBar from '../containers/CategoriesBar.jsx';
import MapState from '../types/MapState.js';
import ItemModal from '../components/ItemModal.jsx';
import ServerRequests from '../types/ServerRequests.js';

function Homepage() {
  const [cards, setCards] = useState()
  const [itemModalDetails, setItemModal] = useState({
    name: '',
    description: '',
    leaseDuration: '',
    category: '',
    photo: '',
    isOpen: '',
  });
  let routes = [];
  const location = useLocation();
  const [mapState, setMapState] = useState(MapState.Hidden);
  const username = JSON.parse(window.localStorage.getItem("StuffLibrary")).username;

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
  let serverItems;
  useEffect(() => {
    //fetch a list of items to display for the user from the server
    async function fetchData() {
      console.log("making request");
      serverItems = await ServerRequests.GetItems(username);
    }
    if(serverItems === undefined) fetchData();
    console.log(serverItems);
    if (!cards) updateCards();
  })

  //Invoke this function to change cards based on some user input
  const updateCards = () => {
    let cardsCache = [];
    for(let itemId = 0; itemId < items.length; itemId++) {
      cardsCache.push(
        <Card details={items[itemId]} toggleModal={toggleModal}/>
      )}
    setCards(cardsCache);
  }

  const toggleModal = (e, itemDetails) => {
    console.log(itemDetails);
    setItemModal({...itemDetails, isOpen: !itemModalDetails.isOpen})
  }

  return (
    <div>
      <h1>Welcome {username}!</h1>
        <NavigationBar />
        <CategoriesBar />
        <MainFeed cards={cards} mapState={mapState} />
        <input type="button" value="View Map" onClick={toggleScreenFormat} />
      {itemModalDetails.isOpen && <ItemModal setIsOpen={setItemModal} details={itemModalDetails}/>} 
    </div>
  );
}

export default Homepage;