'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ThreePaneLayoutProps {
  leftPane: React.ReactNode;
  middlePane: React.ReactNode;
  rightPane: React.ReactNode;
  showRightPane?: boolean;
  onToggleRightPane?: () => void;
}

export default function ThreePaneLayout({
  leftPane,
  middlePane,
  rightPane,
  showRightPane = false,
  onToggleRightPane,
}: ThreePaneLayoutProps) {
  const [isLeftPaneCollapsed, setIsLeftPaneCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-purple-900">
      {/* Left Pane */}
      <motion.div
        initial={false}
        animate={{
          width: isLeftPaneCollapsed ? 0 : 256,
          opacity: isLeftPaneCollapsed ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 overflow-y-auto glass"
      >
        {leftPane}
      </motion.div>

      {/* Toggle Button for Left Pane */}
      <button
        onClick={() => setIsLeftPaneCollapsed(!isLeftPaneCollapsed)}
        className="absolute left-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <svg
          className={cn("h-4 w-4 transition-transform", isLeftPaneCollapsed && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Middle Pane */}
      <motion.div
        animate={{
          width: showRightPane ? "calc(100% - 36rem)" : "calc(100% - 16rem)",
          marginLeft: isLeftPaneCollapsed ? 0 : undefined,
        }}
        transition={{ duration: 0.3 }}
        className="flex-grow overflow-y-auto"
        onClick={() => !showRightPane && onToggleRightPane?.()}
      >
        {middlePane}
      </motion.div>

      {/* Right Pane */}
      <motion.div
        initial={false}
        animate={{
          x: showRightPane ? 0 : "100%",
          width: 320,
        }}
        transition={{ duration: 0.3 }}
        className="flex-shrink-0 overflow-y-auto glass"
      >
        {rightPane}
      </motion.div>
    </div>
  );
} 