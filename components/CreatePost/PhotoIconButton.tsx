'use client'
import React from "react";
import { PhotoIcon } from "@heroicons/react/24/outline"

const PhotoIconButton= () => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative inline-block">
      {/* Icon to trigger file input */}
      <PhotoIcon onClick={openFileInput} className="w-7 h-7 cursor-pointer" />
      {/* File input element (hidden) */}
      <input
        type="file"
        accept='img/*'
        ref={fileInputRef}
        className="hidden"
        multiple
      />
    </div>
  );
};

export default PhotoIconButton;