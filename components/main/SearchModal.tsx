"use client";

import SearchPage from "@/app/(user)/(home)/search/page";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-[50] ">
      {/* Overlay with blur */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md" />

      {/* Dialog Panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-[85%] h-[90%] rounded-lg shadow-lg p-6 relative overflow-x-hidden overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>

          <Dialog.Title className="text-2xl font-semibold">Search</Dialog.Title>

          <SearchPage />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
