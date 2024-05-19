import React from "react";
import { MessageCircleMore } from "lucide-react";

interface MessageNodeProps {
  onDragStart: (event: React.DragEvent, nodeType: string) => void;
}

const MessageNode: React.FC<MessageNodeProps> = ({ onDragStart }) => {
  return (
    <div
      className="p-2 mb-2 flex flex-col items-center px-4 py-3 gap-2 bg-white border border-blue-300 text-blue-600 rounded cursor-move"
      onDragStart={(event) => onDragStart(event, "custom")}
      draggable
    >
      <MessageCircleMore strokeWidth={1.5} />
      <span>Message</span>
    </div>
  );
};

export default MessageNode;
