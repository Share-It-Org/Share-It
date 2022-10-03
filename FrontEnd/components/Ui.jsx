//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Thing from './OthersThing.jsx';


function UI({ username, consoleLogForTesting }){

    return     <div id='UI'>   <h1>Hello, {username}, I totally need to make a proper UI page here. </h1>
        
        <div id='userAndSearchOnTop'>
            <div id='userInformation'>Here goes user information. Username, email, location, etc.</div>
            <div id='searchBar'>Here goes search information. Type what you're looking for by hashtag and click the search button.
            I need an input field here, but it's being weird about it...
            <h3>Search by #hashtag here for Things to borrow.</h3>
                <button onClick={consoleLogForTesting}>Search</button>
            </div>
        </div>
        
        
        <div id='thingDisplays'>
            <div id='myThings'>My Stuff goes here. Plan is to change this div width when user clicks on this div. 

            
                <div id='userThingsButtons'>
                    <button>Add a thing</button>
                </div>
            </div>

        <div id='searchThings'>Search Stuff goes here. Plan is to change this div width when user clicks on the search display

        </div>
        
        

        </div>
    </div>
   };
  
   export default UI;