import React, { useState } from "react";
import { Node, Edge } from "reactflow";

interface SaveButtonProps {
  nodes: Node[];
  edges: Edge[];
}

const SaveButtonHeader: React.FC<SaveButtonProps> = ({ nodes, edges }) => {
  const [message, setMessage] = useState<{
    type: "error" | "success" | "none";
    text: string;
  }>({ type: "none", text: "" });

  // Handle the save button click event
  const handleSave = () => {
    // Find nodes with no incoming or outgoing edges
    const errors = nodes.filter((node) => {
      const isSource = edges.some((edge) => edge.source === node.id);
      const isTarget = edges.some((edge) => edge.target === node.id);
      return !isSource && !isTarget;
    });

    if (errors.length >= 1) {
      setMessage({
        type: "error",
        text: "More than one node has an empty target handle.",
      });
    } else {
      console.log("Flow saved:", { nodes, edges });
      setMessage({ type: "success", text: "Flow Saved" });
    }
    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage({ type: "none", text: "" });
    }, 3000);
  };

  return (
    <div className="w-full h-auto relative top-0 max-w-full bg-gray-200 ">
      <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        {message.type !== "none" && (
          <div
            className={`px-4 py-2 text-sm rounded relative ${
              message.type === "error"
                ? "bg-red-100 border border-red-400 text-red-700"
                : "bg-green-100 border border-green-400 text-green-700"
            }`}
          >
            {message.text}
          </div>
        )}
      </div>
      <div className="flex justify-end text-end w-full px-20 py-3">
        <button
          onClick={handleSave}
          className="text-xs py-2 px-6 bg-white text-blue-500 font-normal hover:bg-blue-600 hover:text-white border border-blue-500 w-fit max-w-auto rounded-md hover:-translate-y-1 transition-all ease-in-out duration-300 hover:shadow-md"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default SaveButtonHeader;
