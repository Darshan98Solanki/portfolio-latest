'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence
} from 'motion/react';
import React, {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

export type DockItemData = {
  icon: React.ReactNode;
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export type DockProps = {
  items: DockItemData[];
  className?: string;
  distance?: number;
  panelHeight?: number;
  baseItemSize?: number;
  dockHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  distance: number;
  baseItemSize: number;
  magnification: number;
};

function DockItem({
  children,
  className = '',
  onClick,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, x => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return Infinity;
    return x - (rect.left + rect.width / 2);
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );

  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onPointerEnter={() => isHovered.set(1)}
      onPointerLeave={() => isHovered.set(0)}
      onClick={onClick}
      tabIndex={0}
      role="button"
      className={`
        relative inline-flex items-center justify-center
        rounded-2xl
        bg-neutral-900/80 backdrop-blur-md
        border border-neutral-600
        shadow-lg
        text-neutral-100
        cursor-pointer
        ${className}
      `}
    >
      {Children.map(children, child =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<{ isHovered?: MotionValue<number> }>, {
              isHovered
            })
          : child
      )}
    </motion.div>
  );
}

type DockLabelProps = {
  children: React.ReactNode;
  isHovered?: MotionValue<number>;
};

function DockLabel({ children, isHovered }: DockLabelProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    return isHovered.on('change', v => setVisible(v === 1));
  }, [isHovered]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -10 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.15 }}
          className="
            absolute -top-7 left-1/2 -translate-x-1/2
            rounded-md px-2 py-0.5
            text-xs text-white
            bg-neutral-800 border border-neutral-600
            whitespace-nowrap
          "
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center text-neutral-100">
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification * 1.5),
    [dockHeight, magnification]
  );

  const height = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring
  );

  return (
    <motion.div
      style={{ height }}
      className="w-full flex justify-center pb-36"
    >
      <motion.div
        onPointerMove={e => {
          isHovered.set(1);
          mouseX.set(e.clientX);
        }}
        onPointerLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
        className={`
          relative flex items-end gap-4
          px-4 pb-2
          rounded-2xl
          border border-neutral-700
          bg-neutral-900/70 backdrop-blur-md
          ${className}
        `}
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            onClick={item.onClick}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
