"use client";

import { motion } from "framer-motion";
import type { SkillItem } from "@/types";

const CATEGORY_ACCENT: Record<SkillItem["category"], string> = {
  backend: "hover:border-violet/60 hover:text-violet",
  frontend: "hover:border-teal/60 hover:text-teal",
  database: "hover:border-amber/60 hover:text-amber",
  tooling: "hover:border-ink/60 hover:text-ink",
};

export default function SkillBadge({
  skill,
  index,
}: {
  skill: SkillItem;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.5,
        delay: (index % 12) * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4, scale: 1.05 }}
      className={`glass-panel flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium text-ink/90 transition-colors duration-300 ${CATEGORY_ACCENT[skill.category]}`}
    >
      {skill.name}
    </motion.li>
  );
}
