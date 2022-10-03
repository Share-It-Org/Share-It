//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Thing from './Thing.jsx';


function UI({ username, consoleLogForTesting, userThings }){

    return     <div id='UI'> 
        
        <div id='userAndSearchOnTop'>
            <div id='userInformation'>
                <p>Here goes user information. Username, email, location, etc.</p>
                <h3>Hello {username}, welcome.</h3>
            </div>
            <div id='searchBar'>Here goes search information. Type what you're looking for by hashtag and click the search button.
            I need an input field here, but it's being weird about it...
            <h3>Search by #hashtag here for Things to borrow.</h3>
                <button onClick={consoleLogForTesting}>Search</button>
            </div>
        </div>
        
        
        <div id='thingDisplays'>
            <div id='myThings'>My Things go here.
                {/* Need a loop here to create Things using contents of userThings */}
                {/* Should be an array of objects */}
                
                <Thing userThings={userThings}></Thing>



            
                <div id='userThingsButtons'>
                    <button>Add a thing</button>
                </div>
            </div>

        <div id='searchThings'>Search results go here.

        </div>
        
        

        </div>
    </div>
   };
  
   export default UI;