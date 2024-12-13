"use client";

import React from "react";
import { FileUpload } from "../ui/file-upload";
import CustomButton from "./CustomButton";

const MediaSelector = ({
  handleFileUpload,
  title,
  className,
  required,
  error,
  files,
}: {
  handleFileUpload?: (files: File[]) => void;
  title: string;
  className?: string | undefined;
  required?: boolean;
  error?: string | null;
  files?: File[];
}) => {
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
        {required && <span className="text-red-600 font-pregular">*</span>}
      </p>

      <div className="flex gap-6 flex-col justify-evenly items-center py-5 rounded-lg bg-gray-200 dark:bg-gray-950 ">
        {files?.length == 0 && (
          <>
            <CustomButton
              title="Choose from existing"
              handlePress={() => {
                alert("Choose from existing");
              }}
              className="px-5 py-4"
            />
            <span className="text-2xl font-extrabold">OR</span>
          </>
        )}
        <div className="flex-1">
          <FileUpload onChange={handleFileUpload} />
        </div>
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
