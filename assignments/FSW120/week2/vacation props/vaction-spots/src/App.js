import React from 'react';

import Vacay from "./vacay"
import vacaySpots from "./vacaySpots.data"

function App() {
  const vacayNewArray = vacaySpots.map(spots => <Vacay place={Vacay.place} price={Vacay.price} timeToGo={Vacay.timeToGo} />)
      return  (
        <div>
        {vacayNewArray}
        </div>
      )
  }


export default App;
