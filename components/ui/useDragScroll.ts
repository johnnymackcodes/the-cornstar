"use client";

import { useRef, type PointerEvent as ReactPointerEvent } from "react";

/**
 * Click-and-drag horizontal scrolling for a scroll container.
 * Only hijacks MOUSE pointers — touch keeps its native swipe/momentum scroll.
 * Suppresses the click that would otherwise fire on a child after a drag.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const st = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  const onPointerDown = (e: ReactPointerEvent<T>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = ref.current;
    if (!el) return;
    st.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
    try {
      el.setPointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerMove = (e: ReactPointerEvent<T>) => {
    const el = ref.current;
    const s = st.current;
    if (!el || !s.down) return;
    const dx = e.clientX - s.startX;
    if (Math.abs(dx) > 3) s.moved = true;
    el.scrollLeft = s.startLeft - dx;
  };

  const end = (e: ReactPointerEvent<T>) => {
    const el = ref.current;
    if (el) {
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {}
    }
    st.current.down = false;
  };

  // Runs in the capture phase, before a child's onClick — cancels the click if the
  // pointer actually dragged.
  const onClickCapture = (e: ReactPointerEvent<T>) => {
    if (st.current.moved) {
      e.stopPropagation();
      e.preventDefault();
      st.current.moved = false;
    }
  };

  return {
    ref,
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerCancel: end,
      onClickCapture,
    },
  };
}
