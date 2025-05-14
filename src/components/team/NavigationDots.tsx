import React from 'react';
import { motion } from 'framer-motion';

interface NavigationDotsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function NavigationDots({ currentPage, totalPages, onPageChange }: NavigationDotsProps) {
  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className="group p-2 focus:outline-none"
          aria-label={`Przejdź do strony ${index + 1}`}
        >
          <motion.div
            animate={{
              scale: currentPage === index ? 1 : 0.6,
              backgroundColor: currentPage === index ? '#46B7C6' : '#E5E7EB'
            }}
            className="w-3 h-3 rounded-full transition-colors group-hover:bg-[#46B7C6]"
          />
        </button>
      ))}
    </div>
  );
}