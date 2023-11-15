// Host.js
import React from "react";
import { Card, Image } from "semantic-ui-react";

const Host = ({ host, onSelect, onMove }) => {
  return (
    <Card
      // Add conditional classNames for styling based on host's state
      className={host.isSelected ? "selected" : ""}
      onClick={onSelect}
    >
      <Image src={host.imageUrl} alt={host.name} />
      <Card.Content>
        <Card.Header>{host.name}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default Host;


