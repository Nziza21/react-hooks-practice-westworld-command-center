import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel() {
  const [logs, setLogs] = useState([]);

  function addLog(log) {
    setLogs((prevLogs) => [log, ...prevLogs]);
  }

  function handleActivateAll() {
    // Perform logic to activate all hosts
    // For example, you can use a function passed from a higher-level component
    // and then log the action
    addLog(Log.warn("Activating all hosts!"));
  }

  function handleDecommissionAll() {
    // Perform logic to decommission all hosts
    // For example, you can use a function passed from a higher-level component
    // and then log the action
    addLog(Log.notify("Decommissioning all hosts."));
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* Button below is the Activate All/Decommisssion All button */}
      {/* This isn't always going to be the same color...*/}
      {/* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */}
      <Button
        fluid
        color={logs.length > 0 ? "red" : "green"}
        content={logs.length > 0 ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        onClick={logs.length > 0 ? handleDecommissionAll : handleActivateAll}
      />
    </Segment>
  );
}

export default LogPanel;

