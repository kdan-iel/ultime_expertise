import React from 'react';
import { motion } from 'motion/react';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
      {/* Animated Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-1/2 -left-1/4 w-full h-full bg-secondary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-accent/20 rounded-full blur-[120px]"
      />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Moving Lines */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white to-transparent"
            style={{ top: `${20 * i}%` }}
          />
        ))}
      </div>
    </div>
  );
}
