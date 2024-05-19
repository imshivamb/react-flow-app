import React from "react";
import MessageNode from "./MessageNode";

const NodesPanel: React.FC = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="w-96 p-4 bg-gray-100 border-l border-gray-300">
      <div className="mb-4 mt-2 text-center text-gray-600 text-xs">
        Drag these nodes to the panel on the right to create a new node.
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        <MessageNode onDragStart={onDragStart} />
      </div>
    </aside>
  );
};

export default NodesPanel;
