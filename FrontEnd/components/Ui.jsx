//setup stuff
//import everything, set up default variables, etc etc etc.
import React from 'react';
import Thing from './Thing.jsx';


//const fakeUserThings = [ { "id": 2, "name": "lawnmower", "description": "a very tiny lawnmower", "status": null, "photo": null, "owner": 15, "holder": null }, { "id": 5, "name": "weedwacker", "description": "an unreasonably large weedwacker", "status": null, "photo": null, "owner": 15, "holder": null } ];



function UI({ username, consoleLogForTesting, userThings, getUserDetails }){

    // //I need to get the user details when this 
    // getUserDetails(username);

    let thingsToDisplay = [];
    for(let thingIndex = 0; thingIndex < userThings.length; thingIndex++){
        //make a Thing for each Thing.
        const name = userThings[thingIndex].name;
        const description = userThings[thingIndex].description;
        const status = userThings[thingIndex].status;
        const holder = userThings[thingIndex].holder;


        thingsToDisplay.push(<Thing name={name} description={description} status={status} holder={holder} />)
        console.log('Things?', thingsToDisplay);
    }

    return     <div id='UI'> 
        
        <div id='userAndSearchOnTop'>
            <div id='userInformation'>
                {/* <p>Here goes user information. Username, email, location, etc.</p> */}
                <h3>Hello {username}.</h3>
            </div>
            <br/>
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
                
                {[thingsToDisplay]}


            
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