// HostList.js
import React from "react";
import { List } from "semantic-ui-react";
import Host from "./Host";  // Assuming you have a Host component

const HostList = ({ hosts }) => {
  return (
    <List divided verticalAlign="middle">
      {hosts.map((host) => (
        <Host key={host.id} host={host} />
      ))}
    </List>
  );
};

export default HostList;

