"use client";

import { AlertTriangleIcon } from "lucide-react";
import React from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface SelectFieldProps {
  title?: string;
  data?: string[] | Array<any>;
  handleValueChange?: (...props: any[]) => void;
  value?: string | number;
  otherStyle?: string;
  required?: boolean;
  error?: string | null;
  errorComponent?:
    | React.ReactElement
    | React.ReactNode
    | any
    | null
    | undefined;
}

const SelectField = ({
  title,
  data,
  handleValueChange,
  value,
  otherStyle,
  required,
  error,
  errorComponent,
  ...props
}: SelectFieldProps) => {
  //   const [selectedValue, setSelectedValue] = useState("select");
  //   const handleValueChangeExample = (e) => setSelectedValue(e.target.value);

  return (
    <div className={`space-y-2 py-1 ${otherStyle}`}>
      {/* Title */}
      <p
        className={`text-base text-gray-700 dark:text-gray-200 font-pmedium ${
          error && "text-red-600"
        }`}
      >
        {title}&nbsp;&nbsp;
        {required && <span className="text-red-600 font-pregular">*</span>}
      </p>

      {/* Input Field */}
      <div
        className={`w-full h-14 bg-gray-200 dark:bg-black-100 flex-center ${
          error
            ? "border-[2px] dark:border-[1.5px] border-red-600"
            : "border-[1.5px] dark:border-2 border-black-200"
        } rounded-2xl focus:border-secondary px-5 gap-3 space-x-4`}
      >
        <select
          onChange={handleValueChange}
          className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-white font-psemibold"
          {...props}
          value={value ? value : "select"}
        >
          <option className="text-black bg-white/10" value="select">
            Select
          </option>
          {data?.map((item) => (
            <option
              className="text-black bg-white/10"
              key={item.value ? item.value : item.id ? item.id : item.name}
              value={item.value ? item.value : item.id ? item.id : item.name}
              // selected={(item.value ? item.value : item.name) === value}
            >
              {item.title ? item.title : item.name}
            </option>
          ))}
        </select>
      </div>

      {/* Error Message */}
      {error &&
        (errorComponent ? (
          typeof errorComponent === "function" ? (
            errorComponent()
          ) : (
            errorComponent
          )
        ) : (
          <div className="flex items-center space-x-3 px-1.5 mt-1">
            <AlertTriangleIcon size={18} color="red" />
            <span className="text-red-600 font-pregular">{error}</span>
          </div>
        ))}
    </div>
  );
};

export default SelectField;
