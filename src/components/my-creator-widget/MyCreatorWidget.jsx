import React from "react";
import { CanvasWidget } from "@projectstorm/react-canvas-core";
import { NodesTypesContainer } from "../nodes-types-container/NodesTypesContainer";
import { NodeTypeLabel } from "../node-type-label/NodeTypeLabel";
import { DiagramCanvas } from "../DiagramCanvas";
import { MyNodeModel } from "../MyNodeModel";
import "./my-creator-widget.css";

export const MyCreatorWidget = props => {
  // force update canvas
  const forceUpdate = React.useReducer(bool => !bool)[1];

  const diagramEngine = props.engine;

  const onNodeDrop = event => {
    const node = new MyNodeModel({ color: "#e86c24" });

    const point = diagramEngine.getRelativeMousePoint(event);
    node.setPosition(point);

    diagramEngine.getModel().addNode(node);
    forceUpdate();
  };

  return (
    <div className="creator-body">
      <header className="creator-header">
        <div className="creator-title">
          Drag orange button to the canvas on the right -> SUCCESS!
        </div>
      </header>

      <div className="creator-content">
        <NodesTypesContainer>
          <NodeTypeLabel model={{ ports: "in" }} name="DRAG ME" />
        </NodesTypesContainer>

        <div
          className="creator-layer"
          onDrop={event => onNodeDrop(event)}
          onDragOver={event => {
            event.preventDefault();
          }}
        >
          <DiagramCanvas>
            <CanvasWidget engine={diagramEngine} />
          </DiagramCanvas>
        </div>
      </div>
    </div>
  );
};
