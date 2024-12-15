"use client";

import React, { useState } from "react";
import { FileUpload } from "../ui/file-upload";
import CustomButton from "./CustomButton";
import { AlertTriangleIcon } from "lucide-react";

const MediaSelector = ({
  handleFileUpload,
  title,
  className,
  required,
  multiple,
  error,
  files,
  newFile,
}: {
  handleFileUpload?: (files: File[]) => void;
  title: string;
  className?: string | undefined;
  required?: boolean;
  multiple?: boolean;
  newFile?: boolean;
  error?: string | null;
  files?: File[];
}) => {
  const [selected, setSelected] = useState<"none" | "new" | "old">("none");

  /* Move this to parent */
  // const [files, setFiles] = useState<File[]>([]);
  // const handleFileUpload = (files: File[]) => {
  //   setFiles(files);
  //   console.log(files);
  // };

  return (
    <div className={`space-y-2 py-1 ${className}`}>
      {/* Title */}
      <p
        className={`text-base text-gray-700 dark:text-gray-200 font-pmedium ${
          error && "text-red-600"
        }`}
      >
        {title}&nbsp;&nbsp;
        {required && <span className="text-red-600 font-circular-web">*</span>}
      </p>

      <div
        className={`flex gap-6 flex-col justify-evenly items-center py-5 px-4 rounded-lg bg-gray-200 dark:bg-gray-950 ${
          error && "  border-1 border-red-600 "
        }`}
      >
        {!newFile && (
          <>
            {files?.length == 0 && (
              <>
                <CustomButton
                  title="Choose from existing"
                  handlePress={() => {
                    alert("Choose from existing");
                    setSelected("old");
                  }}
                  className="px-5 py-4 flex-1"
                />
                <span className="text-2xl flex-1 font-extrabold">OR</span>
              </>
            )}
            {(selected === "none" || selected === "old") && (
              <>
                <CustomButton
                  title="New Media"
                  handlePress={() => {
                    // alert("New Media");
                    setSelected("new");
                  }}
                  className="px-5 py-4 flex-1"
                />
              </>
            )}
          </>
        )}
        {(newFile || selected == "new") && (
          <>
            <div className="flex-1">
              <FileUpload onChange={handleFileUpload} multiple={multiple} />
            </div>
          </>
        )}

        {/* Error Message */}
        {error && (
          <div className="flex items-center space-x-3 px-1.5 mt-1">
            <AlertTriangleIcon size={18} color="red" />
            <span className="text-red-600 font-pregular">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaSelector;

// export const FileUploader = ({
//   handleFileUpload,
// }: {
//   handleFileUpload?: (files: File[]) => void;
// }) => {
//   /* Move this to parent */
//   // const [files, setFiles] = useState<File[]>([]);
//   // const handleFileUpload = (files: File[]) => {
//   //   setFiles(files);
//   //   console.log(files);
//   // };

//   return (
//     <div>
//       <FileUpload onChange={handleFileUpload} />
//     </div>
//   );
// };
