import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import HostList from "./HostList";
import ActivateAllButton from "./ActivateAllButton";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters() {
  const hosts = [
    { id: 1, name: "Host 1" },
    { id: 2, name: "Host 2" },
  ];

  const logs = [
    { type: "error", msg: "[9:00pm] ERROR: Something bad happened" },
  ];

  const handleActivateAll = () => {
  };

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <HostList hosts={hosts} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        <ActivateAllButton onActivateAll={handleActivateAll} />
        <LogPanel logs={logs} />
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;


