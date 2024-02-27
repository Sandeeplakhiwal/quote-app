"use client";
import React, { ReactNode, useEffect, useState } from "react";

interface FilterModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
  children: ReactNode;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    const bodyElement = document.body;

    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "";
    }

    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.getElementById("modal");
      if (modalElement && !modalElement.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      bodyElement.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="modal"
      className="fixed inset-0 flex items-center justify-center bg-opacity-30 bg-black "
    >
      <div className="bg-white rounded-lg shadow-md w-8/12 sm:w-3/12">
        {children}
      </div>
    </div>
  );
};

export default FilterModal;
