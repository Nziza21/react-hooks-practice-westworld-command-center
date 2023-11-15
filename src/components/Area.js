// Area.js
import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";  

const Area = ({ area, hosts, onSelectHost, onMoveHost }) => {
  return (
    <Card.Group>
      {/* Render area information */}
      <Card>
        <Card.Content>
          <Card.Header>{area.name}</Card.Header>
          {/* Add more area information here if needed */}
        </Card.Content>
      </Card>

      {/* Render Hosts in this Area */}
      {hosts.map((host) => (
        <Host
          key={host.id}
          host={host}
          onSelect={() => onSelectHost(host.id)}
          onMove={(newArea) => onMoveHost(host.id, newArea)}
        />
      ))}
    </Card.Group>
  );
};

export default Area;

