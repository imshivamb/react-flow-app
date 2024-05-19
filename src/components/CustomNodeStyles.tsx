import React, { memo } from "react";
import { Handle, Position } from "reactflow";

interface CustomNodeProps {
  data: any;
  isSelected?: boolean;
}
const CustomNodeStyles: React.FC<CustomNodeProps> = ({ data, isSelected }) => {
  console.log("Rendering CustomNodeStyles:", data);
  const borderClass = isSelected ? "border-blue-500 border-2" : "";
  return (
    <div
      className={`shadow-xl rounded-lg bg-white w-full min-w-[200px] max-w-[250px] h-auto text-wrap ${borderClass}`}
    >
      <div className="flex flex-col w-full rounded-t-lg">
        <div className="flex justify-between items-center bg-teal-200 rounded-t-lg px-2 py-1.5 w-full">
          <div className="flex gap-1.5 items-center">
            <div className="w-5 h-5">{data.emoji}</div>
            <h5 className="font-semibold text-sm text-gray-900">
              {data.heading}
            </h5>
          </div>
          <div className="text w-4 h-4 flex items-center justify-center bg-white rounded-full">
            {data.icon}
          </div>
        </div>
        <div className="text-start py-2 px-2 text-xs font-normal text-gray-700">
          {data.label}
        </div>
      </div>
      <Handle type="target" position={Position.Left} className="w-16" />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
};

export default memo(CustomNodeStyles);
