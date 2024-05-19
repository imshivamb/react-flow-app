"use client";

import CustomNodeStyles from "@/components/CustomNodeStyles";
import NodesPanel from "@/components/NodesPanel";
import SaveButtonHeader from "@/components/SaveButtonHeader";
import SettingsPanel from "@/components/SettingsPanel";
import { MessageCircleMore } from "lucide-react";
import React, { useCallback, useState } from "react";
import ReactFlow, {
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlowInstance,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

const nodeTypes = {
  custom: CustomNodeStyles,
};

// Initial nodes for the flow
const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    data: {
      label: "test message 1",
      heading: "Send message",
      icon: <MessageCircleMore stroke="green" size="12px" />,
      emoji: "🗯️",
    },
    position: { x: 200, y: 100 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      label: "test message 2",
      heading: "Send message",
      icon: <MessageCircleMore stroke="green" size="12px" />,
      emoji: "🗯️",
    },
    position: { x: 500, y: 100 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;
// Initial edges connecting the nodes
const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
];

const App: React.FC = () => {
  // State for nodes and edges
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [label, setLabel] = useState("");
  const [showSettingsPanel, setShowSettingsPanel] = useState(false);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  // Handlers for node and edge changes
  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),

    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    []
  );
  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.id !== selectedNode?.id) {
        setSelectedNode(node);
        setShowSettingsPanel(true);
        setLabel(node.data.label);
      }
    },
    [selectedNode]
  );

  // Function to update the label of a node
  const updateNodeLabel = (id: string, label: string) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, label } } : node
      )
    );
  };

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      if (!reactFlowInstance) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: {
          label: "test message new",
          heading: "Send message",
          icon: <MessageCircleMore stroke="green" size="12px" />,
          emoji: "🗯️",
        },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="h-full max-h-[90vh] w-full">
      {/* Button to save the current flow */}
      <SaveButtonHeader nodes={nodes} edges={edges} />
      <div className="flex h-[90vh]">
        {/* React Flow component for building the flow */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          onConnect={onConnect}
          onDrop={onDrop}
          onNodeClick={onNodeClick}
          className="flex-grow bg-white"
        >
          <Controls />
        </ReactFlow>
        {/* Settings panel for editing selected node */}
        {!showSettingsPanel ? (
          <NodesPanel />
        ) : (
          selectedNode && (
            <SettingsPanel
              node={selectedNode}
              label={label}
              setLabel={setLabel}
              updateNodeLabel={updateNodeLabel}
              closeSettings={() => setShowSettingsPanel(false)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
