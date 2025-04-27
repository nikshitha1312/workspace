'use client';

import { useState } from 'react';
import ThreePaneLayout from '@/app/components/Layout/ThreePaneLayout';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [showRightPane, setShowRightPane] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Tasks');

  const navigationItems = [
    {
      name: 'Dashboard',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      path: '/',
    },
    {
      name: 'Projects',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      path: '/projects',
    },
    {
      name: 'Tasks',
      icon: (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      path: '/tasks',
    },
  ];

  const handleNavigation = (item: typeof navigationItems[0]) => {
    setSelectedItem(item.name);
    router.push(item.path);
  };

  const LeftPane = () => (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-blue-500">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h1 className="ml-3 text-xl font-bold text-white">Workspace</h1>
      </div>
      <nav className="mt-6 space-y-2 px-3">
        {navigationItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item)}
            className={cn(
              "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              selectedItem === item.name
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "text-gray-300 hover:bg-white/10"
            )}
          >
            {item.icon}
            <span className="ml-3">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <ThreePaneLayout
      leftPane={<LeftPane />}
      middlePane={children}
      rightPane={<div />}
      showRightPane={false}
    />
  );
} 