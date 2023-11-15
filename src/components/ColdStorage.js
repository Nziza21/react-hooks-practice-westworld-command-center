import React from "react";
import { Segment, Card } from "semantic-ui-react";

function ColdStorage({ hosts }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">Cold Storage</h3>
      </Segment>
      <Segment compact>
        <Card.Group>
          {hosts.map((host) => (
            <Card key={host.id}>
              <Card.Content>
                <Card.Header>{host.name}</Card.Header>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
