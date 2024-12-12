"use client";

import { AlertTriangleIcon, EyeClosedIcon, EyeIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

interface InputFieldProps {
  title?: string;
  value?: string;
  placeholder?: string;
  handleTextChange?: (...props: any[]) => void;
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

const InputField = ({
  title,
  value,
  placeholder,
  handleTextChange,
  otherStyle,
  error,
  errorComponent,
  required,
  ...props
}: InputFieldProps) => {
  const { theme } = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = title === "Password" || title === "Confirm Password";

  return (
    <div className={`space-y-2 py-1 ${otherStyle}`}>
      {/* Title */}
      <p
        className={`text-base text-gray-700 dark:text-gray-200  font-pmedium ${
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
        <input
          type={isPasswordField && !showPassword ? "password" : "text"}
          className="flex-1 bg-transparent border-none outline-none text-gray-700 dark:text-white font-psemibold"
          placeholder={placeholder}
          onChange={(e) => handleTextChange?.(e.target.value)}
          value={value}
          {...props}
        />

        {/* Password Toggle Button */}
        {isPasswordField && (
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeClosedIcon
                size={20}
                color={
                  theme === "dark"
                    ? "white"
                    : theme === "system"
                    ? "red"
                    : "black"
                }
              />
            ) : (
              <EyeIcon
                size={20}
                color={
                  theme === "dark"
                    ? "white"
                    : theme === "system"
                    ? "gray"
                    : "black"
                }
              />
            )}
          </button>
        )}
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

export default InputField;
