import React, {useState} from 'react';
import MapState from '../types/MapState';
import Map from './Map.jsx';
import CardContainer from '../containers/CardContainer.jsx';
import '../styles/MainFeed.css';

const MainFeed = ({cards, mapState}) => {

  const [itemLocations, setItemLocations] = useState([]);

  if(mapState === MapState.Hidden) {
    document.body.style.overflow = "";

    return (
    <div id="fullscreen-feed">
      <CardContainer cards={cards} />
    </div>
    )
  }
  else if (mapState === MapState.Peek) {
    document.body.style.overflow = "hidden";
    return (
    <div id="splitscreen-feed">
      <div className="card-container">
        <CardContainer cards={cards} />
      </div>
      <div id="mapdiv" className='map'>
        <div id="slide" >
          <Map itemLocations={itemLocations} /> 
        </div>
      </div>
    </div>
    )
  }
   
}

export default MainFeed