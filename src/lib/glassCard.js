/**
 * Frosted-glass panels: transparent fill, soft border, top highlight line
 * (matches parallax cosmic stat cards).
 */
const glassSurface =
  "group relative overflow-hidden border border-slate-300/40 bg-transparent backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-900/5 transition before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-[1] before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-500/35 before:to-transparent hover:-translate-y-1 hover:border-slate-400/50 hover:ring-slate-900/10 dark:border-white/25 dark:shadow-[0_10px_30px_rgba(24,30,70,0.28)] dark:ring-white/10 dark:before:via-white/65 dark:hover:border-white/45 dark:hover:ring-white/20";

export const glassCard = `${glassSurface} rounded-2xl`;
export const glassCardXL = `${glassSurface} rounded-xl`;
export const glassCardLG = `${glassSurface} rounded-lg`;

/** Compact row for dark hero backgrounds (parallax / cosmic). */
export const glassHeroRow =
  "relative overflow-hidden rounded-lg border border-white/20 bg-transparent px-3 py-2 backdrop-blur-md ring-1 ring-white/10 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/55 before:to-transparent";
