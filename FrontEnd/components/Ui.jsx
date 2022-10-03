//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';


function UI({ username }){

    return <div id='UI'>   <h1>Hello, {username}, I totally need to make a proper UI page here. </h1>
        <div id='topStuff'>
            <div id='userInformation'>Here goes user information</div>
            <div id='searchBar'>Here goes search information</div>
        </div>
        <div id='stuffDisplays'>
            <div id='myStuff'>My Stuff goes here. Plan is to change this div width when user clicks on their display. </div>
            <div id='searchStuff'>Search Stuff goes here. Plan is to chanege this div width when user clicks on the search display</div>
        </div>
        <div id='buttons'>
            <div id='userStuffButtons'>
                <button>Add a thing</button>
                <button>Delete a thing</button>
                <button>Lend a thing</button>
                <button>Don't lend a thing</button>
            </div>
            <div>
            <button>Request a Thing</button>
            </div>
        </div>

    
    


    </div>
   };
  
   export default UI;