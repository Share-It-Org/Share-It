const db = require('../Models/database-model');
const getRecordsModel = require('../Models/get-records-model');
import fetch from 'node-fetch';


const locationController = {};

locationController.geoCode = (req, res, next) => {

  const { street_address, city, state } = req.body;
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${street_address},+${city},+${state}&key=AIzaSyBRacG1Uw6S2XcqqqA50dnaTRUSwiJ2Gg4`)
    .then((data) => data.json())
    .then((data) => {
        console.log('Made the fetch');
        console.log('data : ', data);
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        const addy = data.results[0].formatted_address;

        res.locals.newEntry = {
            street_address: street_address,
            city: city,
            state: state,
            lat: lat,
            lng: lng,
            formatted_address: addy
        }
        next();
    })
    .catch(err => next({
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'Unable to fetch geocode' },
    }));
}


//.addLocation
//this is the middleware method to add the new entry into the locations table and receive back the location _id
//the location _id will then be passed on to be used so cave the entry in captions table with a reference to the location
// locationController.addLocation = (req, res, next) => {
//   console.log('hello, from ADD LOCATION');
//   const { name, caption, zip } = req.body;
//   const { street_address, city, state, lat, lng, formatted_address } = res.locals.newEntry;
//   const text = 'INSERT INTO locations(street_address, city, state, created_by_id, zip_code, lat, lng,  name, formatted_address) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING _id;';
//   const params = [street_address, city, state, null, zip, lat, lng, name, formatted_address];

//   await db.query(text, params, (err, res2) => {
//       if (err) {
//           next({
//               log: 'Express error handler caught unknown middleware error',
//               status: 500,
//               message: { err: 'Unable to add a new location' },
//           });
//       } else {
//           console.log('entry made :', res2.rows[0]._id);
//           //saves the _id of the entry just made to res.locals
//           res.locals.newEntryID = res2.rows[0]._id;
//           next();
//       }

//   });
// }



/*
SELECT * FROM locations l
LEFT OUTER JOIN captions c
ON c.location_id = l._id

*/
locationController.getLocationsAndCaptions = (req, res, next) => {
  console.log('hello, from ADD LOCATION');

  const text = `SELECT * FROM locations l
                LEFT OUTER JOIN captions c
                ON c.location_id = l._id;`;


  // The purpose of entriesFormatter is to return an array with objects.
  // We should only receive one object per location and each object contains an array of captions.
  // We use entriesFormatter to prevent duplicate objects and create an array with all the captions. Time-Complexity O(n)
  const entriesFormatter = (array) => {
      // Use a map to store a key linked to the objects' id's and store as a value an array containing all captions from that location
      let mapp = new Map();
      array.forEach(el => {
          if (mapp.has(el._id)) {
              let value = mapp.get(el._id)
              if (el.caption) value.push(el.caption);
              mapp.set(el._id, value);
          } else {
              el.caption ? mapp.set(el._id, [el.caption]) : mapp.set(el._id, ['']);
          }
      })

      // Output will have one object per each locations
      let output = []
      // Use a set to keep track what objects I have added to my output array
      let setOfVisitedId = new Set();
      array.forEach(el => {
          // If it's not in the set then we add the object and the captions array to the output array


          if (!setOfVisitedId.has(el._id)) {
              el.caption = mapp.get(el._id)
              el.location = {
                  lat: el.lat,
                  lng: el.lng
              };
              output.push(el);
              setOfVisitedId.add(el._id);
          }
      });
      return output;
  };

  // Query the database to obtain all locations and captions
  db.query(text)
      .then(data => {
          let newArr = entriesFormatter(data.rows);
          res.locals.bigList = newArr;
          console.log(res.locals.bigList);
          next();
      })
      .catch((err) => {
          next({
              log: 'Express error handler caught unknown middleware error',
              status: 500,
              message: { err: 'Unable to get all locations and captions' },
          })
      })
}


module.exports = locationController;
