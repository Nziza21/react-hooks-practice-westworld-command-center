// WestworldMap.js
import React from "react";
import { Grid } from "semantic-ui-react";
import Area from "./Area";  // Import Area component

const WestworldMap = ({ areas, hosts }) => {
  return (
    <Grid columns={2} divided>
      <Grid.Column>
        {/* Render the WestworldMap section */}
        {/* You might want to pass areas as props to the Area component */}
        <Area areas={areas} hosts={hosts} />
      </Grid.Column>
      {/* Add another Grid.Column for the Headquarters section */}
      {/* You can add more components here as needed */}
    </Grid>
  );
};

export default WestworldMap;
