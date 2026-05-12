"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedCounter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 32;
    const increment = value / totalFrames;

    const timer = setInterval(() => {
      frame += 1;
      if (frame >= totalFrames) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(increment * frame));
      }
    }, 24);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      +{count}
    </motion.span>
  );
}
