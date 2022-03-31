import React from "react";
import { PortWidget } from "@projectstorm/react-diagrams-core";

export const MyNodeWidget = props => {
  return (
    <div className="my-node">
      <div
        className="my-node-header-container"
        style={{ backgroundColor: props.node.color }}
      >
        <div className="my-icon" />
        <div className="my-node-header-text">My Node</div>
      </div>

      <PortWidget
        className="port-container left-port"
        engine={props.engine}
        port={props.node.getPort("in")}
      >
        <div className="my-port" />
      </PortWidget>

      <div className="my-node-content">Some details</div>

      <PortWidget
        className="port-container right-port"
        engine={props.engine}
        port={props.node.getPort("out")}
      >
        <div className="my-port" />
      </PortWidget>
    </div>
  );
};
