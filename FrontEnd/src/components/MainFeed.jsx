import React, {useState} from 'react';
import MapState from '../types/MapState';
import Map from './Map.jsx';
import CardContainer from './CardContainer.jsx';
import '../styles/MainFeed.css';

const MainFeed = ({cards, mapState}) => {

  const [itemLocations, setItemLocations] = useState([]);

  if(mapState === MapState.Hidden) {
    return (
    <div id="fullscreen-feed">
      <CardContainer cards={cards} />
    </div>
    )
  }
  else if (mapState === MapState.Peek) {
    return (
    <div id="splitscreen-feed">
      <div className="card-container">
        <CardContainer cards={cards} />
      </div>
      <div id="mapdiv" className='map'> 
        <Map itemLocations={itemLocations} /> 
      </div>
    </div>
    )
  }
  
   
}

export default MainFeed