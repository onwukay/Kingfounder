"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "15%", left: "10%", color: "#3B82F6", size: 6 },
  { top: "30%", left: "85%", color: "#FACC15", size: 8 },
  { top: "75%", left: "18%", color: "#3B82F6", size: 5 },
  { top: "65%", left: "82%", color: "#FACC15", size: 7 },
  { top: "20%", left: "60%", color: "#3B82F6", size: 5 },
  { top: "80%", left: "55%", color: "#FACC15", size: 6 },
];

export default function FloatingParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 15px ${particle.color}`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
