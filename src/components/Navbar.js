import React from 'react';
 const Navbar = ( )=> {
     const style = {
         background: 'rgb(240, 240, 240)',
         color: 'black'
     }
     return (
         <div className="navbar">
              <h1>
                  My hooks App
              </h1>
              <ul>
                  <li>
                      Home
                  </li>
                  <li>
                      About
                  </li>
              </ul>
         </div>
     )
 }
 export default Navbar