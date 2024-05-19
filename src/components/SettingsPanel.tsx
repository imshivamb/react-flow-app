"use client";

import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { Node } from "reactflow";

interface SettingsPanelProps {
  node: Node;
  label: string;
  setLabel: React.Dispatch<React.SetStateAction<string>>;
  updateNodeLabel: (id: string, label: string) => void;
  closeSettings: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  node,
  updateNodeLabel,
  label,
  setLabel,
  closeSettings,
}) => {
  // Handle change in text input
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setLabel(event.target.value);
    updateNodeLabel(node.id, event.target.value);
  };

  return (
    <div className="w-96 bg-gray-100 border-l border-gray-300">
      <div className="flex border-b border-gray-300 py-2  px-4 gap-4 items-center">
        <span>
          <ArrowLeft
            onClick={closeSettings}
            color="gray"
            size={16}
            className="cursor-pointer"
          />
        </span>
        <span className="flex-1 text-sm text-center font-normal text-gray-600">
          Message
        </span>
      </div>
      <div className=" px-4 pt-4">
        <label className="block mb-2 text-gray-600 text-xs">Text:</label>
        <textarea
          value={label}
          onChange={handleChange}
          className="w-full p-2 border h-20 text-xs  text-gray-900 border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default SettingsPanel;
