"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { AlertTriangleIcon } from "lucide-react";

interface InputFieldOTPProps {
  title?: string;
  value?: string;
  onChange?: (value: string) => void;
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

export function InputFieldOTP({
  onChange,
  title,
  value = "",
  required,
  error,
  otherStyle,
  errorComponent,
}: InputFieldOTPProps) {
  const [currentValue, setCurrentValue] = React.useState(value);

  const handleChange = (value: string) => {
    setCurrentValue(value);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onChange && onChange(value);
  };

  return (
    // <div className="space-y-2 flex-center flex-col">
    <div className={`space-y-2 py-1 flex-center flex-col ${otherStyle}`}>
      {/* Title */}
      {title && (
        <p
          className={`text-base text-gray-700 dark:text-gray-200  font-pmedium ${
            error && "text-red-600"
          }`}
        >
          {title}&nbsp;&nbsp;
          {required && <span className="text-red-600 font-pregular">*</span>}
        </p>
      )}

      <InputOTP
        maxLength={6}
        value={currentValue}
        onChange={(value) => handleChange(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={0}
          />
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={1}
          />
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={2}
          />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={3}
          />
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={4}
          />
          <InputOTPSlot
            className={`size-16 ${
              required && error
                ? "border-[2px] dark:border-[1.5px] border-red-600"
                : "border-[1.5px] dark:border-2 border-gray-500"
            }`}
            index={5}
          />
        </InputOTPGroup>{" "}
      </InputOTP>
      <div className={`text-center text-md ${error ? "text-red-600" : ""}`}>
        {currentValue === "" ? (
          <>Enter your one-time password. (Check your Email)</>
        ) : (
          <>You entered: {currentValue}</>
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
}
