"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <motion.svg
        className="w-16 h-16"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="#ea00d9" // Tailwind's blue-500 color
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.svg>
      
    </div>
  );
}