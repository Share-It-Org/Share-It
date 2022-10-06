import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter }from 'react-router-dom';
import App from './routes/App.jsx';
// import Homepage from './routes/Homepage.jsx';
// import Login from './routes/Login.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/> 
    </BrowserRouter>
  </React.StrictMode>
)

// root.render(
//     <BrowserRouter>
//       <Routes>
//       {/* <Route path='/' element={<App />}> </Route>
//       <Route path='home' element={<Homepage />}></Route> */}

//       <Route path='/' element={<App />}>
//         <Route path='/home' element={<Homepage />}></Route>
//       </Route>


//         {/* <Route path="homepage" element={<Homepage />} /> */}
//       {/* <Route path='login' element={<Login />} /> */}
//       </Routes>
//   </BrowserRouter>
// )