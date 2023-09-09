'use client'

import { VideoCameraIcon } from '@heroicons/react/24/outline';
import React from 'react';

const VedioIconButton = () => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const openFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="relative inline-block">
      {/* Icon to trigger file input */}
      <VideoCameraIcon onClick={openFileInput} className="w-7 h-7 cursor-pointer" />
      {/* File input element (hidden) */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="video/*"
      />
    </div>
  );
};

export default VedioIconButton;