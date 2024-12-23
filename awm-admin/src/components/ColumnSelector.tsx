import React from "react";

interface ColumnSelectorProps {
  columns: string[];
  selectedColumns: string[];
  onChange: (selectedColumns: string[]) => void;
}

const ColumnSelector: React.FC<ColumnSelectorProps> = ({ columns, selectedColumns, onChange }) => {
  const handleCheckboxChange = (column: string) => {
    if (selectedColumns.includes(column)) {
      onChange(selectedColumns.filter((col) => col !== column));
    } else {
      onChange([...selectedColumns, column]);
    }
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Select Columns</h3>
      <div className="grid grid-cols-2 gap-2">
        {columns.map((column) => (
          <label key={column} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedColumns.includes(column)}
              onChange={() => handleCheckboxChange(column)}
              className="mr-2"
            />
            {column.replace(/_/g, " ")}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ColumnSelector;
