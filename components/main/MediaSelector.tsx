"use client";

import React, { useState } from "react";
import { FileUpload } from "../ui/file-upload";

const MediaSelector = () => {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <div>
      <FileUpload onChange={handleFileUpload} />
    </div>
  );
};

export default MediaSelector;
