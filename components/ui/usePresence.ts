"use client";

import { useEffect, useState } from "react";

/**
 * Deterministic mount/unmount for overlays. Replaces AnimatePresence, which
 * fails to unmount reliably under React 19 + motion 13 in this project.
 *
 * On open the element mounts already `visible` (so its content is guaranteed
 * on screen without depending on requestAnimationFrame, which is throttled in
 * background tabs) — play the ENTER animation with a CSS @keyframes class.
 * On close, `visible` flips false so a CSS transition animates the exit, then
 * the element unmounts after `duration`.
 */
export function usePresence(open: boolean, duration = 300) {
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setVisible(true);
      return;
    }
    setVisible(false);
    const t = setTimeout(() => setMounted(false), duration);
    return () => clearTimeout(t);
  }, [open, duration]);

  return { mounted, visible };
}
