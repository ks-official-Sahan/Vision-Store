import { AlertTriangleIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const ErrorComponent = ({
  errorMessage,
  setErrorMessage,
}: {
  errorMessage: string | undefined;
  setErrorMessage: (value: React.SetStateAction<string | undefined>) => void;
}) => {
  return (
    <>
      {errorMessage && (
        <div className="px-10">
          <div className="flex justify-between space-x-3 px-1.5 mt-3 bg-yellow-500/40 py-2 rounded-lg">
            <div className="flex-center gap-2 w-full">
              <AlertTriangleIcon size={18} color="red" />
              <span className="text-red-600 font-pregular">{errorMessage}</span>
            </div>
            <Button
              className={
                "size-8 self-end text-red-500 rounded-full border border-red-500 opacity-50 hover:opacity-100"
              }
              onClick={() => setErrorMessage("")}
            >
              <XIcon size={14} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorComponent;
