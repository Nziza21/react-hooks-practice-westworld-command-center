import React, { useState, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./WestworldMap";  // Import WestworldMap component

import "../stylesheets/App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [hosts, setHosts] = useState([]);

  useEffect(() => {
    // Fetch data from /areas and /hosts endpoints
    // Update state using setAreas and setHosts
  }, []);

  return (
    <Segment id="app">
      <WestworldMap areas={areas} hosts={hosts} />
    </Segment>
  );
}

export default App;

