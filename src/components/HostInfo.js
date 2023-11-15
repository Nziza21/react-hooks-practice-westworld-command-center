import React, { useState } from "react";
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host }) {
  const [options] = useState([
    { key: "some_area", text: "Some Area", value: "some_area" },
    { key: "another_area", text: "Another Area", value: "another_area" },
  ]);

  const handleOptionChange = (e, { value }) => {
    console.log("Selected Area:", value);
  };

  const handleRadioChange = () => {
    console.log("The radio button fired");
  };

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.name} | {host.gender === "male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={host.active ? "Active" : "Decommissioned"}
                checked={host.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={host.currentArea}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;

